import React, { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { CopyToClipboard } from "react-copy-to-clipboard";

import io from "socket.io-client";
import Peer from "simple-peer";

import "./CallPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";

import "./VideoChat.css";

import CallPageFooter from "./UI/CallPageFooter/CallPageFooter";

const socket = io.connect('https://forstekvideo.herokuapp.com/');
let peer = null;

const Video = () => {

    const history = useHistory();

    const [ calling, setCalling ] = useState(false);
	
	const [ me, setMe ] = useState("");
	const [ stream, setStream ] = useState();
	const [ receivingCall, setReceivingCall ] = useState(false);
	const [ caller, setCaller ] = useState("");
	const [ callerSignal, setCallerSignal ] = useState();
	const [ callAccepted, setCallAccepted ] = useState(false);
	const [ idToCall, setIdToCall ] = useState("");
	const [ callEnded, setCallEnded] = useState(false);

    const [screenCastStream, setScreenCastStream] = useState();
    const [isPresenting, setIsPresenting] = useState(false);

    const [isAudio, setIsAudio] = useState(true);
    const [isVideo, setIsVideo] = useState(true);

	const myVideo = useRef();
	const userVideo = useRef();
	const connectionRef= useRef();

  	const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile'))) ;
  	const location= useLocation();

  	useEffect(()=>{
    	const token = user?.token;
    	setUser(JSON.parse(localStorage.getItem('profile')));
 	} ,[location]);

 	const [ name, setName ] = useState(user?.result.name || 'guest user');
	const [ callName, setCallName ] = useState('guest');

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream);
			myVideo.current.srcObject = stream;
		})

		socket.on("me", (id) => {
			setMe(id);
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true);
			setCaller(data.from);
			setCallName(data.name);
			setCallerSignal(data.signal);
		})
	}, []);

	const callUser = (id) => {
    setCalling(true);
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		});
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		});
		peer.on("stream", (stream) => {
			
			userVideo.current.srcObject = stream;
			
		});
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true);
			peer.signal(signal);
		})

		connectionRef.current = peer;
	}

	const answerCall =() =>  {
    setCalling(true);
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		});
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller });
		});
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream;
		});

		peer.signal(callerSignal);
		connectionRef.current = peer;
	}


    const screenShare = () => {
        
       /* navigator.mediaDevices
          .getDisplayMedia({ cursor: true })
          .then((screenStream) => {
            peer.replaceTrack(
              stream.getVideoTracks()[0],
              screenStream.getVideoTracks()[0],
              stream
            );
            setScreenCastStream(screenStream);
            screenStream.getTracks()[0].onended = () => {
              peer.replaceTrack(
                screenStream.getVideoTracks()[0],
                stream.getVideoTracks()[0],
                stream
              );
            };*/
            setIsPresenting(true);
          //});
      };
    
      const stopScreenShare = () => {

        /*screenCastStream.getVideoTracks().forEach(function (track) {
          track.stop();
        });
        peer.replaceTrack(
          screenCastStream.getVideoTracks()[0],
          stream.getVideoTracks()[0],
          stream
        );*/
        setIsPresenting(false);
      };
    
      const toggleAudio = (value) => {
        
        stream.getAudioTracks()[0].enabled = value;
        setIsAudio(value);
        
      };

      const toggleVideo = (value) => {
        
        stream.getVideoTracks()[0].enabled = value;
        setIsVideo(value);
        
      };
    
      const disconnectCall = () => {
        
        toggleVideo(false);
        setCalling(false);
        setCallEnded(true);

        setTimeout(()=>{
          connectionRef.current.destroy();
          history.push("/");
          window.location.reload();
        }, 1);


      };



  return (
    <>

<div className="home-page">
  <div className="body">


  {!calling && (
    <div className="left-side">
      <div className="content">
        <h2>Premium video meetings. Now free for everyone.</h2>
        <p>
          We re-engineered the service we built for secure business
          meetings, Forstek Meet, to make it free and available for all.
        </p>
        <div className="action-btn">

        <CopyToClipboard text={me} onCopy={() => window.alert("Code copieé")}>
          <button className="btn green">
            <FontAwesomeIcon className="icon-block" icon={faVideo} />
            New Meeting
          </button>
        </CopyToClipboard>

          <div className="input-block">
            <div className="input-section">
              <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
              <input value={idToCall} onChange={(e) => setIdToCall(e.target.value)} placeholder="Enter a code or link" />
            </div>
            <button className="btn no-bg" onClick={() => callUser(idToCall)}>Join</button>
          </div>
        </div>
      </div>

{/***********  accepter appel */}

      <div className="help-text">
      {receivingCall && !callAccepted ? (
			<div className="action-btn">
				<p>{callName} appel...</p>
				<button variant="contained" className="btn green" onClick={answerCall}>
        <FontAwesomeIcon className="icon-block" icon={faVideo} />
					Accepter
				</button>
			</div>
		) : null}
      </div>

{/*********** fin accepter appel */}

    </div>
  )}

{stream && (

    <div className="right-side">
      <div className="content">
        <h3>{name}</h3>
      <video muted playsInline className="video-container" ref={myVideo} autoPlay />
      </div>
    </div>

)}

{calling && callAccepted && !callEnded && (


<div className="right-side">
<div className="content">
  <h3></h3>
<video playsInline className="video-container" ref={userVideo} autoPlay />
</div>
</div>

)}


  </div>

{calling && callAccepted && !callEnded && (

  <CallPageFooter
        isPresenting={isPresenting}
        stopScreenShare={stopScreenShare}
        screenShare={screenShare}
        isAudio={isAudio}
        toggleAudio={toggleAudio}
        isVideo={isVideo}
        toggleVideo={toggleVideo}
        disconnectCall={disconnectCall}
      />

)}
</div>
    </>
  );
};
export default Video;

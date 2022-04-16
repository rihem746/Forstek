import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./CallPageFooter.css";

const CallPageFooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  toggleAudio,
  disconnectCall,
  toggleVideo,
  isVideo,
}) => {
  return (
    <div className="footer-item">
      <div className="left-item">

      </div>
      <div className="center-item">
        <div
          className={`icon-block ${!isAudio ? "red-bg" : null}`}
          onClick={() => toggleAudio(!isAudio)}
        >
          <FontAwesomeIcon
            className="icon"
            icon={isAudio ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div className="icon-block" onClick={disconnectCall}>
          <FontAwesomeIcon className="icon red" icon={faPhone} />
        </div>
        <div className={`icon-block ${!isVideo ? "red-bg" : null}`}
          onClick={() => toggleVideo(!isVideo)} >
          <FontAwesomeIcon className="icon" icon={isVideo ? faVideo : faVideoSlash} />
        </div>
      </div>
      <div className="right-item">


        {isPresenting ? (
          <div className="icon-block" onClick={stopScreenShare}>
            <FontAwesomeIcon className="icon red" icon={faDesktop} />
            <p className="title">Stop presenting</p>
          </div>
        ) : (
          <div className="icon-block" onClick={screenShare}>
            <FontAwesomeIcon className="icon red" icon={faDesktop} />
            <p className="title">Present now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallPageFooter;

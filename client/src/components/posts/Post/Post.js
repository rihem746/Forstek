import React from 'react';
import  {Card , CardHeader, CardContent , Button, Typography, CardActions , ButtonBase} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import usesStyles from './styles';
import ThumbUpAltIcon  from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import {useHistory} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import {deletePost , likePost} from '../../../actions/posts';


const Post = ({post ,setCurrentId}) => {
    const classes=usesStyles();
    const dispatch = useDispatch();
    const user= JSON.parse(localStorage.getItem('profile'));
    const history= useHistory();

  const Likes = ()=> {
    console.log('like >>>> ', post);
      if(post.likes.length >0) {
        return post.likes.find((like)=> like ===(user?.result?.googleId || user?.result?._id))
         ? (
           <><ThumbUpAltIcon fontSize="small" /> &nbsp;{post.likes.length > 2 ? `Vous et ${post.likes.length - 1 } autres` : `${post.likes.length} like${post.likes.length >1 ? 's' : ' '} `}</>):
           ( <><ThumbUpAltOutlined  fontSize="small"/>&nbsp;{post.likes.length} {post.likes.length ===1 ? 'Like' : 'Likes' }</>
         )
      }else{
        return <> <ThumbUpAltOutlined fontSize='small' />&nbsp; Like</>
      }
      
  };
  const openPost =()=>{
        history.push(`/posts/${post._id}`);
    };
  

    return ( 
        <Card className={classes.Card} raised elevation={6}>
        <ButtonBase
         className={classes.cardActions} onClick={openPost}>

       
          <CardHeader
            action={(user?.result.googleId ===post?.creator || user?.result?._id === post?.creator ) && (
              <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                <DeleteIcon fontSize='small'></DeleteIcon>
              </Button>
            )}
            title={post.job}
            subheader={moment(post.date).fromNow()}
          />

             <CardContent>
                <Typography gutterBottom variant="h5" component="h4" className={classes.title}>{post.entreprise}</Typography>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=>`#${tag}`)}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.details}>{post.description}</Typography>
            </CardContent>
            </ButtonBase>

        <CardActions disableSpacing className={classes.cardActions}>
          <Button size="small" color="primary" disabled={!user?.result} onClick={()=>dispatch(likePost(post._id))}>
             <Likes />
          </Button>
          {(user?.result.googleId ===post?.creator || user?.result?._id === post?.creator ) && (
             <Button style={{color:'white'}} size="small" onClick={()=>setCurrentId(post._id)}>
             <MoreHorizonIcon fontSize='default'  />
           </Button>  
           )}
           
          
           
         </CardActions>  
             
           
        </Card>
     );
}
 
export default Post;

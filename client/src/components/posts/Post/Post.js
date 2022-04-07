import React from 'react';
import  {Card , cardActions , CardContent , CardMedia, Button, Typography, CardActions} from '@material-ui/core';
import  ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import usesStyles from './styles';

import {useDispatch} from 'react-redux';
import {deletePost , likePost} from '../../../actions/posts';


const Post = ({post ,setCurrentId}) => {
    const classes=usesStyles();
    const dispatch = useDispatch();
    return ( 
        <Card className={classes.Card}>
           <CardMedia title={post.job}></CardMedia>
           <div className={classes.overlay}>
                <Typography variant="h6">{post.entreprise}</Typography>
                <Typography variant='body2'>{moment(post.date).fromNow()}</Typography>
           </div>
           <div className={classes.overlay2}>
              <Button style={{color:'white'}} size="small" onClick={()=>setCurrentId(post._id)}>
                 <MoreHorizonIcon fontSize='default'  />
                  </Button>  
           </div>
           <CardContent>
              <Typography className={classes.title}
               variant='h5' color="textSecondary">{post.description}</Typography>
           </CardContent>
           <CardActions className={classes.cardActions}>
               <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
                   <ThumbUpAltIcon  fontSize='small'/>
                   J'aime
                   {post.likes}
               </Button>
               <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                   <DeleteIcon fontSize='small'/>
                   Supprimer
                  
               </Button>
           </CardActions>  
             
           
        </Card>
     );
}
 
export default Post;
import React from 'react';
import  {Card , CardHeader, CardContent , Button, Typography, CardActions} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import usesStyles from './styles';

import {useDispatch} from 'react-redux';
import {deletePost , likePost} from '../../../actions/posts';


const Post = ({post ,setCurrentId}) => {
    const classes=usesStyles();
    const dispatch = useDispatch();
    return ( 
        <Card className={classes.Card}>
          <CardHeader
            action={
              <Button size="small" color="secondary" onClick={()=>dispatch(deletePost(post._id))}>
                <DeleteIcon />
              </Button>
            }
            title={post.job}
            subheader={moment(post.date).fromNow()}
          />

             <CardContent className={classes.cardDetails} >
                <Typography gutterBottom variant="h5" component="h4" className={classes.title}>{post.entreprise}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.details}>{post.description}</Typography>
            </CardContent>


        <CardActions disableSpacing >
          <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon color="secondary"/>
            </IconButton>
                {post.likes}
          </Button>
              
          <Button style={{color:'white'}} size="small" onClick={()=>setCurrentId(post._id)}>
            <MoreHorizonIcon fontSize='default'  />
          </Button>  
           
         </CardActions>  
             
           
        </Card>
     );
}
 
export default Post;

import React , {useEffect}from 'react';
import {Paper , Typography , Divider, CircularProgress} from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {useDispatch , useSelector} from 'react-redux';
import moment from 'moment';
import {useParams , useHistory} from 'react-router-dom';
import useStyles from './styles';
import {getPost , getPostsBySearch} from '../../actions/posts';
const PostDetails = () => {
    
    const {post,posts,isLoading}=useSelector((state)=>state.posts);
    const dispatch=useDispatch();
    const history=useHistory();

    const {id}=useParams();
    const classes= useStyles()
    
    useEffect(()=>{
        dispatch(getPost(id));
    },[id]);
    
    
    useEffect(()=>{
      if (post) {
        dispatch(getPostsBySearch({search: 'none' ,tags:post?.tags.join(',')}));
      }
  },[id]);

   
    if (!post) return null;

    if(isLoading) { 
      return(
        <Paper elevation={6} className={classes.loadingPaper}>
          <CircularProgress size="7em"   />     
          </Paper>
      )
    }
    

    const recommendedPosts= posts.filter(({ _id })=> _id !==post._id);
    const openPost=(_id) =>{
       history.push(`/posts/${_id}`);
    }

    return ( 
     <Paper style={{padding: '20px', borderRadius: '15px'}} eleveation={6}>
        <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{post.job}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.description}</Typography>
          <Typography variant="h6">Crée Par: {post.name}</Typography>
          <Typography variant="body1">{moment(post.date).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Type: {post.type}</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong><FmdGoodIcon/> {post.localisation}</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">Vous pouvez voir aussi:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({job, description, localisation, likes,type,_id})=>(
              <div style={{margin:'20px' , cursor:"pointer"}} onClick={()=>openPost(_id)} key={_id}>
                 <Typography gutterBottom variant="h6">{job}</Typography>
                 <Typography gutterBottom variant="subtitle2">{description}</Typography>
                 <Typography gutterBottom variant="subtitle2">{localisation}</Typography>
                 <Typography gutterBottom variant="subtitle1"> Likes:{likes.length}</Typography>
              </div>
             ) )}
          </div>
        </div>
      )}
     
     </Paper>
     
     );
}
 
export default PostDetails;
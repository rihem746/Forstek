import React , {useEffect}from 'react';
import {Paper , Typography , CircularProgress, Divider} from '@material-ui/core';
import {useDispatch , useSelector} from 'react-redux';
import moment from 'moment';
import {useParams , useHistory} from 'react-router-dom';
import useStyles from './styles';
import {getPost} from '../../actions/posts';
const PostDetails = () => {
    
    const {post,posts}=useSelector((state)=>state.posts);
    const dispatch=useDispatch();
    const history=useHistory();
    const {id}=useParams();
    const classes= useStyles()
    
    useEffect(()=>{
        dispatch(getPost(id));
    },[id]);
    if (!post) return null;

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
          <Typography variant="body1"><strong>Localisation: {post.localisation}</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        
      </div>
     </Paper>
     );
}
 
export default PostDetails;
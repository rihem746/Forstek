import React ,{useEffect} from 'react';
import {Container , Grow, Grid} from '@material-ui/core';
import Posts from '../posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import {getPosts} from '../../actions/posts'

const Home = () => {
    //const classes = useStyles();
  const dispatch= useDispatch();

  useEffect (()=> {
      dispatch(getPosts());
  },[dispatch]);

    return ( 
        <Grow in>
        <Container container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm ={7}>
             <Posts/>
          </Grid>
          <Grid item xs={12} sm ={4}>
             <Form />
          </Grid>
        </Container>

      </Grow>
     );
}
 
export default Home;



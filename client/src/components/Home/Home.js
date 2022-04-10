import React ,{useEffect, useState} from 'react';
import {Container , Grow, Grid} from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Posts from '../posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import {getPosts} from '../../actions/posts'
import Search from '../Search/Search';

const Home = () => {
    //const classes = useStyles();
  const dispatch= useDispatch();
  const [currentId,setCurrentId]= useState(null);
  useEffect (()=> {
      dispatch(getPosts());
  },[currentId,dispatch]);

    return ( 
        <Grow in>
        <Container container justify="space-between" alignItems="stretch" spacing={3} maxWidth="1500px">
        <Stack spacing={2}>
          <Search/>
          <Grid item xs={12}  sm ={7}>
             <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm ={4}>
             <Form  currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          </Stack>
        </Container>

      </Grow>
     );
}
 
export default Home;



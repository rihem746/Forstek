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

          <Posts setCurrentId={setCurrentId} />

          <Form  currentId={currentId} setCurrentId={setCurrentId} />

          </Stack>
        </Container>

      </Grow>
     );
}
 
export default Home;



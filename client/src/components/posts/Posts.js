import React from 'react';
import { useSelector } from 'react-redux';
import {Grid, CircularProgress, Card} from '@material-ui/core';

import Pagination from '@mui/material/Pagination';


import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId}) => {
  const {posts ,isLoading} = useSelector((state) => state.posts);
  const classes = useStyles();


  
  if(!posts.length && !isLoading) return 'Pas des annonces ! ';
  return (
     isLoading ?   <CircularProgress  />:(
<Grid container justify="center" item xs>

        <Grid className={classes.container} container alignItems="stretch" spacing={3}  >
           {posts.map((post ) => (
             <Grid key={post._id} item xs={12} sm={4}>
                <Post post={post}  setCurrentId={setCurrentId}/>
             </Grid>
           ))}
        </Grid>

       
</Grid>


     )

  );
};

export default Posts;




import React from 'react';
import { useSelector } from 'react-redux';
import {Grid, CircularProgress, Card} from '@material-ui/core';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
     !posts.length ?   <CircularProgress  />:(
<Grid container justify="center" item xs>

        <Grid className={classes.container} container alignItems="stretch" spacing={2}  >
           {posts.map((post ) => (
             <Grid key={post._id} item xs={12} sm={4}>
                <Post post={post}  setCurrentId={setCurrentId}/>
             </Grid>
           ))}
        </Grid>

        <Card  className={classes.Card}>
      <Pagination count={10} color="secondary" />
      </Card>
</Grid>


     )

  );
};

export default Posts;




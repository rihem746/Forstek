import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
      <>
      <h1>POSTS</h1>
      <Post />
      <Post />
      </>
  );
};

export default Posts;

/**
 *  fama erreur 
 *  lezem tzid fil pakaje.json
 *  "proxy": "http://localhost:5000"
 *   w fi server index.js
 *  thot app.use('/posts',postRoutes);
 *  ba3d app.use(cors());
 *
 * 
 */

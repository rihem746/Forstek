import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost)=> API.post('/posts' , newPost);
export const updatePost = (id,updatedPost)=>axios.patch('${url}/${id}' , updatedPost);
export const deletePost = (id)=>axios.delete('${url}/${id}');
export const likePost = (id)=>axios.patch('${url}/${id}/likePost');







export const signIn=(formData)=> API.post('/users/signin', formData);
export const signUp=(formData)=> API.post('/users/signup', formData);




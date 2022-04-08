import React, { useState , useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {useDispatch ,useSelector} from 'react-redux';
import {createPost} from '../../actions/posts';
import useStyles from './styles';
import Input from './Input';
import { updatePost } from '../../api';

const initialState = { job: '', entreprise: '', description: '', type: '', localisation:'' };

const Form = ({currentId, setCurrentId}) => {
  const classes= useStyles();
  const [postData, setPostData] = useState(initialState);
  const dispatch = useDispatch();
  const post=useSelector((state)=> currentId ?  state.posts.find((p)=>p._id ===currentId):null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId){
      dispatch(updatePost(currentId,postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
    
  };
  const handleChange=(e) =>{
    setPostData ({...postData , [e.target.name]: e.target.value});
};
  
  useEffect (()=>{
    if (post) setPostData(post);

   },[post])

  const clear = () => {
      setCurrentId(null);
      setPostData({ job: '', entreprise: '', description: '', type: '', localisation:''});
  };
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
         <Typography variant="h6">{currentId? 'Modification' : 'Création'} annonce </Typography>
         <Input name="job" label="Métier"handleChange ={handleChange} type="text"/>
         <Input name="entreprise" label="Entreprise"handleChange ={handleChange} />
         <Input name="type" label="Type"handleChange ={handleChange} />
         <Input name="localisation" label="Localisation"handleChange ={handleChange} />
         <Input name="description" label="Description"handleChange ={handleChange} />

         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;

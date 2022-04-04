import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts';
import useStyles from './styles';


const Form = () => {
  const classes= useStyles();
  const [postData, setPostData] = useState({ job: '', entreprise: '', description: '', type: '', localisation:'' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createPost(postData));
  };

  const clear = () => {

  };

  

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Création annonce </Typography>
        <TextField name="job" variant="outlined" label="Métier" fullWidth value={postData.job} onChange={(e) => setPostData({ ...postData, job:e.target.value })} />
        <TextField name="entreprise" variant="outlined" label="Entreprise" fullWidth value={postData.entreprise} onChange={(e) => setPostData({ ...postData, entreprise:e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
        <TextField name="type" variant="outlined" label="Type" fullWidth multiline rows={4} value={postData.type} onChange={(e) => setPostData({ ...postData, type: e.target.value })} />
        <TextField name="localisation" variant="outlined" label="Localisation" fullWidth multiline rows={4} value={postData.localisation} onChange={(e) => setPostData({ ...postData, localisation: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;

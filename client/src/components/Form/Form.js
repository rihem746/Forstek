import React, { useState , useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {useDispatch ,useSelector} from 'react-redux';
import {createPost} from '../../actions/posts';
import useStyles from './styles';
import Input from './Input';
import { updatePost } from '../../api';

    
const initialState = { job: '', description: '',tags: '',categorie:'', type: '', localisation:'' };

const Form = ({currentId, setCurrentId}) => {
  const classes= useStyles();
  const [postData, setPostData] = useState(initialState);
  const dispatch = useDispatch();
  const post=useSelector((state)=> currentId ?  state.posts.find((p)=>p._id ===currentId):null);
  const user= JSON.parse(localStorage.getItem('profile'));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({...postData, name: user?.result?.name}));
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
      setPostData({ job: '', description: '', type: '', localisation:''});
  };

  if (!user?.result?.name) {
    return (
      <Paper>
        <Typography>
          S'il vous plait connectez vous afin de publier vos propres annonces
        </Typography>
      </Paper>
    )
  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
         <Typography variant="h6">{currentId? 'Modification' : 'Création'} annonce </Typography>
         <Input name="job" label="Métier"handleChange ={handleChange} type="text"/>
         <Input name="description" label="Description"handleChange ={handleChange} />
         <Input name="tags" label="Hachtags"handleChange ={handleChange} />
         <Input name="categorie" label="Catégorie"handleChange ={handleChange} />
         <Input name="type" label="Type"handleChange ={handleChange} />
         <Input name="localisation" label="Localisation"handleChange ={handleChange} />
        

         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;

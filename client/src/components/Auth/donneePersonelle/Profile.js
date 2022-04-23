import React, { useState } from 'react';
import {Avatar, Button , Paper, Grid,Typography,Container} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import useStyles from '../styles';
import Input from '../Input';
import { useDispatch } from 'react-redux';


const initialState={name:'', entrepriseName:'', location:'', password:'' ,phone:'' ,adresse:'' ,email:'', dateNaissance:'', genre:''};

const Profile = () => {
    const user= JSON.parse(localStorage.getItem('profile'));
    const classes=useStyles();
    const [isEntreprise , setIsEntreprise]=useState(false);
    const [showPassword , setShowPassword]=useState(false);
    const [formData,setFormData]=useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
   

    const handleShowPassword =() => {
        setShowPassword ((prevShowPassword)=> !prevShowPassword)
    }
     
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log('data : ',formData);
        //dispatch(signup(formData,history));
    };
    const handleChange=(e) =>{
          setFormData ({...formData , [e.target.name]: e.target.value});
    };
    
    

    return ( 
        <Container component="main" maxWidth="gl">
            <Paper className={classes.paper} elevation={3}>
               <form className={classes.form} onSubmit={handleSubmit}>
                   <Grid container spacing={2}>
                      
                       <Input name="name" label="Nom Complet" handleChange ={handleChange}  value={formData.firstName}/>
                       
                       { isEntreprise && (
                            <>
                               <Input name="entrepriseName" label="Nom entreprise" handleChange ={handleChange} half value={formData.entrepriseName}/>
                               <Input name="location" label="Localisation" handleChange ={handleChange} half value={formData.location}/>
                            </>
                       )}
                       <Input name="email" label="Adresse e-mail" handleChange ={handleChange} type="email" value={formData.email}/>
                       <Input name="password" label="Mot de passe" handleChange ={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} value={formData.password} />

                       <Input name="phone" label="Téléphone" handleChange ={handleChange} value={formData.phone}/>
                       <Input name="adresse" label="Adresse" handleChange ={handleChange} value={formData.adresse}/>

                       <FormLabel id="Date de naissance" >Date de naissance</FormLabel>
                       <Input name="dateNaissance" handleChange ={handleChange} type="date" value={formData.dateNaissance} />

                       <FormLabel id="genre" >Genre *</FormLabel>
                       <RadioGroup
                         aria-labelledby="demo-controlled-radio-buttons-group"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                       >
                        <FormControlLabel value="femme" control={<Radio />} label="Femme" />
                        <FormControlLabel value="homme" control={<Radio />} label="Homme" />
                     </RadioGroup>


                    </Grid>
                    <Button type='submit' fullwidth variant="contained" color="primary" className={classes.submit}>Modifier
                    </Button>
                   
                         
                 



               </form>
            </Paper>
        </Container>
     );
}
 
export default Profile;
import React, { useState } from 'react';
import {Avatar, Button , Paper, Grid,Typography,Container} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useSelector } from 'react-redux';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import {updateUser} from '../../../actions/auth';
import useStyles from '../styles';
import Input from '../Input';
import { useDispatch } from 'react-redux';

const user= JSON.parse(localStorage.getItem('profile'));
const initialState={name:user?.result?.name, entreprise:user?.result?.entreprise, location:user?.result?.location, password:user?.result?.password ,telephone:user?.result?.telephone ,adresse:user?.result?.adresse,email:user?.result?.email, datedenaiss:user?.result?.datedenaiss, genre:user?.result?.genre};

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
       dispatch(updateUser(user.result._id,formData));
    };
    const handleChange=(e) =>{
          setFormData ({...formData , [e.target.name]: e.target.value});
    };
    
    

    return ( 
        <Container component="main" maxWidth="gl">
            <Paper className={classes.paper} elevation={3}>
               <form className={classes.form} onSubmit={handleSubmit}>
                   <Grid container spacing={2}>
                      
                       <Input name="name" label="Nom Complet" handleChange ={handleChange}  value={formData.name}/>
                       
                       { isEntreprise && (
                            <>
                               <Input name="entrepriseName" label="Nom entreprise" handleChange ={handleChange} half value={formData.entrepriseName}/>
                               <Input name="location" label="Localisation" handleChange ={handleChange} half value={formData.location}/>
                            </>
                       )}
                       <Input name="email" label="Adresse e-mail" handleChange ={handleChange} type="email" value={formData.email}/>
                       <Input name="password" label="Mot de passe" handleChange ={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} value={formData.password} />

                       <Input name="telephone" label="Téléphone" handleChange ={handleChange} value={formData.telephone}/>
                       <Input name="adresse" label="Adresse" handleChange ={handleChange} value={formData.adresse}/>

                       <FormLabel id="datedenaiss" >Date de Naissance</FormLabel>
                       <Input name="datedenaiss" handleChange ={handleChange} type="date" value={formData.datedenaiss} />

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
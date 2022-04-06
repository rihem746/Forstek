import React, { useState } from 'react';
import {Avatar, Button , Paper, Grid,Typography,Container} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {signup}  from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';
import { useDispatch } from 'react-redux';

const initialState={firstName:'' , lastName:'', entrepriseName:'', location:'', password:'' ,confirmPassword :''};

const Inscription = () => {
    
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
        dispatch(signup(formData,history));
    };
    const handleChange=(e) =>{
          setFormData ({...formData , [e.target.name]: e.target.value});
    };
    
    const switchMode =() =>{
     setIsEntreprise ((prevIsEntreprise)=> !prevIsEntreprise)
     handleShowPassword(false);
    };

    return ( 
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
               </Avatar>
               <Typography variant= "h5">{isEntreprise ? 'pour entreprise' : "pour chercheur d'emploi"}</Typography>
               <form className={classes.form} onSubmit={handleSubmit}>
                   <Grid container spacing={2}>
                      
                       <Input name="firstName" label="Nom"handleChange ={handleChange} half/>
                       <Input name="lastName" label="Prénom"handleChange ={handleChange} half />
                       { isEntreprise && (
                            <>
                               <Input name="entrepriseName" label="Nom entreprise"handleChange ={handleChange} half/>
                               <Input name="location" label="Localisation"handleChange ={handleChange} half/>
                            </>
                       )}
                       <Input name="email" label="Adresse e-mail"handleChange ={handleChange} type="email"/>
                       <Input name="password" label="Mot de passe"handleChange ={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                       <Input name="confirmPassword" label="Mot de passe"handleChange ={handleChange} type ="password" />
                    </Grid>
                    <Button type='submit' fullwidth variant="contained" color="primary" className={classes.submit}>S'inscrire
                    </Button>
                    <Grid container justify="flex-end">
                         <Grid item>
                             <Button onClick={switchMode}>
                                {isEntreprise ? "pour les chercheurs d'opportunité" : "pour les chercheurs du ressources"} 
                             </Button>
                         </Grid>
                    </Grid>



               </form>
            </Paper>
        </Container>
     );
}
 
export default Inscription;
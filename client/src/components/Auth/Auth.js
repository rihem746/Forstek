import React, { useState } from 'react';
import {Avatar, Button , Paper, Grid,Typography,Container} from '@material-ui/core';
import  {GoogleLogin} from 'react-google-login';
import Icon from './Icon';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

import {signin}  from '../../actions/auth';



const initialState= {email: '' , password:''};

const Auth = () => {
    
    const classes=useStyles();
    const [showPassword , setShowPassword]=useState(false);
    const [formData,setFormData]=useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();



    const handleShowPassword =() => {
        setShowPassword ((prevShowPassword)=> !prevShowPassword)
    }
     
    const handleSubmit=(e) =>{
        e.preventDefault();
        dispatch(signin(formData,history));
    };
    const handleChange=(e) =>{
        setFormData ({...formData , [e.target.name]: e.target.value});
    };

    const googleSuccess= async (res) =>{
             const result= res?.profileObj;
             const token = res?.tokenId;
             try {
                 dispatch({type : 'AUTH' , data:{result , token}});
                 history.push('/');
             } catch (error) {
                 console.log(error);
             }

    };
    const googleFailure=(error) =>{
         console.log(error);
    };



    return ( 
        <Container component="main" maxWidth="gl">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
               </Avatar>
               <Typography variant= "h5">Se Connecter</Typography>
               <form className={classes.form} onSubmit={handleSubmit}>
                   <Grid container spacing={2}>
                       <Input name="email" label="Adresse e-mail"handleChange ={handleChange} type="email"/>
                       <Input name="password" label="Mot de passe"handleChange ={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    </Grid>
                    <Grid container justify="center">
                    <Button type='submit' fullwidth color="primary" className={classes.submit} variant='contained'>Se Connecter</Button>
                    </Grid>
                    <GoogleLogin    
                       clientId='1072472849226-esh8sbqfgbja49bq2ehr2nkdduu1ntbi.apps.googleusercontent.com'
                       render={(renderProps)=>(
                        <Button className={classes.googleButton}   color='primary' fullWidth onClick =  {renderProps.onClick} disabled =  {renderProps.disabled} startIcon={<Icon/>}   variant='contained'>
                            Se connecter avec Google
                        </Button>
                    )}
                     onSuccess={googleSuccess}
                     onFailure={googleFailure}
                     cookiePolicy="single_host_origin"
                        
                    />
                    <Grid container justify="center">
                         <Grid item>
                             <Button>
                                 vous n'avez pas du compte ? <Link to="/inscription"> s'inscrire </Link>
                             </Button>
                         </Grid>
                    </Grid>



               </form>
            </Paper>
        </Container>
     );
}
 
export default Auth;
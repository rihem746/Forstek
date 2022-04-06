import React, { useState , useEffect} from 'react'
import useStyles from './styles';

import {Link , useHistory ,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';


import { AppBar, Toolbar,Avatar, Button, Typography} from '@material-ui/core';
import logo from '../../images/logo.svg';
const Navbar = () => {
   
   const  classes= useStyles();
   const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile'))) ;
   const dispatch =useDispatch();
   const history = useHistory();
   const location= useLocation();


   const logout =() =>{
       dispatch({type: 'LOGOUT'});
       history.push('/');
       setUser(null);

   };

  useEffect(()=>{
     const token = user?.token;

     setUser(JSON.parse(localStorage.getItem('profile')));
  } ,[location]);

  return (
   
    <AppBar className={classes.appBar} position="static" color="primary">
      <div className={classes.brandContainer}>
         <img component={Link} to="/" className={classes.image} src={logo} alt='forstek' height='60'></img>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="conatined"  onClick={logout} className={classes.logout}>se déconnecter</Button>
          </div>
        ):(
          <div>
            <Button component={Link} to="auth" variant='contained' color="secondary">Se connecter</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
   
  )
}

export default Navbar;

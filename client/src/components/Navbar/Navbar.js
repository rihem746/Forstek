import React from 'react'
import useStyles from './styles';

import {Link} from 'react-router-dom';

import { AppBar, Toolbar,Avatar, Button, Typography} from '@material-ui/core';
import logo from '../../images/logo.svg';
const Navbar = () => {
   
   const  classes= useStyles();
   const user= null ;
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
            <Button variant="conatined" className={classes.logout}></Button>
          </div>
        ):(
          <div>
            <Button component={Link} to="auth" variant='contained' color="secondary">Sign In</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
   
  )
}

export default Navbar;

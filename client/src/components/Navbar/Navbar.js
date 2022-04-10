import React, { useState , useEffect} from 'react'
import useStyles from './styles';

import {Link , useHistory ,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { AppBar, Toolbar,Avatar, Typography} from '@material-ui/core';
import logo from '../../images/logo.svg';


import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Job', 'CV'];

const Navbar = () => {
   
   const  classes= useStyles();
   const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile'))) ;

   const [anchorElNav, setAnchorElNav] = useState(null);
   const [anchorElUser, setAnchorElUser] = useState(null);

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
 
   const handleOpenNavMenu = (event) => {
     setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
     setAnchorElUser(event.currentTarget);
   };
 
   const handleCloseNavMenu = () => {
     setAnchorElNav(null);
   };
 
   const handleCloseUserMenu = () => {
     setAnchorElUser(null);
   };
 
   return (
    <AppBar className={classes.appBar} position="static" >
       <Container maxWidth="xl">
         <Toolbar disableGutters>
           
         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>

         <div className={classes.brandContainer}>
               <Link to="/">
              <img component={Link} to="/" className={classes.image} src={logo} alt='forstek' height='35'></img>
              </Link>
            </div></Box>

           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
             <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleOpenNavMenu}
               color="inherit"
             >
               <MenuIcon />
             </IconButton>
             <Menu
               id="menu-appbar"
               anchorEl={anchorElNav}
               anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'left',
               }}
               open={Boolean(anchorElNav)}
               onClose={handleCloseNavMenu}
               sx={{
                 display: { xs: 'block', md: 'none' },
               }}
             >
               {pages.map((page) => (
                 <Link to={"/"+page}>
                 <MenuItem key={page} onClick={handleCloseNavMenu}>
                   <Typography textAlign="center" variant='subtitle1'>{page}</Typography>
                 </MenuItem>
                 </Link>
               ))}
             </Menu>
           </Box>
           <Typography
             variant="h6"
             noWrap
             component="div"
             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
           >
           </Typography>
           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             {pages.map((page) => (
               <Link to={"/"+page}>
               <Button
                 key={page}
                 onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: 'white', display: 'block' }}
               >
                 {page}
               </Button>
               </Link>
             ))}
           </Box>
 
           <Box sx={{ flexGrow: 0 }}>
             <Tooltip title="Open settings">
        {user ? (
          <IconButton sx={{ p: 0 }}>
          <Toolbar className={classes.toolbar}>
            <Avatar onClick={handleOpenUserMenu} className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
          </Toolbar>
          </IconButton>

        ):(
          <div>
            <Button component={Link} to="auth" variant='contained' color="secondary">Se connecter</Button>
          </div>
        )}

             </Tooltip>
             <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
             >
                 <MenuItem key='Profile' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>              
                 </MenuItem>

                 <MenuItem key='Notification' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Notification</Typography>              
                 </MenuItem>

                 <MenuItem key='Saved jobs' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Saved jobs</Typography>              
                 </MenuItem>

                 <MenuItem key='Logout' onClick={handleCloseUserMenu}>
                  <Typography onClick={logout} textAlign="center">Logout</Typography>
                 </MenuItem>

             </Menu>
           </Box>
         </Toolbar>
       </Container>
     </AppBar>
   );
  
}

export default Navbar;

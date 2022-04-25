import React, { useState , useEffect} from 'react'
import useStyles from './styles';

import {Link , useHistory ,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';

import { AppBar, Toolbar,Avatar, Typography, Button} from '@material-ui/core';
import logo from '../../images/logo.svg';
import AddIcon from '@mui/icons-material/Add';


import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import IconButton from '@mui/material/IconButton';

import Stack from '@mui/material/Stack';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['cv'];

const Navbar = () => {
   
   const  classes= useStyles();
   const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile'))) ;
   const [currentId,setCurrentId]= useState(null);
   const [anchorElNav, setAnchorElNav] = useState(null);
   const [anchorElUser, setAnchorElUser] = useState(null);

   const dispatch =useDispatch();
   const history = useHistory();
   const location= useLocation();


   const logout =() =>{
       dispatch({type: 'LOGOUT'});
      // history.push('/');
       setUser(null);
       window.location.reload();


   };

  useEffect(()=>{
     const token = user?.token;

     setUser(JSON.parse(localStorage.getItem('profile')));
     console.log(user);
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
                   <Typography textAlign="center">{page}</Typography>
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
           {(user?.result?.entreprise=='') ? (
           <Stack direction="row" spacing={3}>
           
             {pages.map((page) => (
               <Link to={"/"+page}>
                 <IconButton className={classes.page} style={{color:'rgb(251, 223, 223)'}} >
                 {page}
                 </IconButton>
               </Link>
             ))}

            </Stack>
          ):(<></>)}
           </Box>
 
           <Box sx={{ flexGrow: 0 }}>
             
        {user ? (
          <Tooltip title="Voir les paramétres">
          <IconButton sx={{ p: 0 }}>
          <Toolbar className={classes.toolbar}>
            <Avatar onClick={handleOpenUserMenu} className={classes.purple} alt={user?.result?.name} src={user?.result?.imageUrl}>{user?.result?.name.charAt(0)}</Avatar>
            
          </Toolbar>
          </IconButton>
          </Tooltip>

        ):(
          <div>
            <Button component={Link} to="auth" variant='contained' color="secondary"><PersonIcon></PersonIcon> Se Connecter</Button>
          </div>
        )}

             
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
                

                 <MenuItem key='Notification' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Notifications</Typography>              
                 </MenuItem>

                 

                 <MenuItem key='Logout' onClick={handleCloseUserMenu}>
                  <Typography onClick={logout} textAlign="center">Se Deconnecter</Typography>
                 </MenuItem>

             </Menu>
           </Box>
         </Toolbar>
       </Container>
     </AppBar>
   );
  
}

export default Navbar;
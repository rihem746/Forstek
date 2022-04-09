import React from 'react';
import {Container} from '@material-ui/core';
import Stack from '@mui/material/Stack';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Inscription from './components/Auth/Inscription';
import Profile from './components/Auth/donneePersonelle/Profile';
import Cv from './components/Auth/cv/Cv';
import Footer from './components/footer/Footer';

const  App =() => {

  

  return (
     <BrowserRouter>
        <Container maxwidth="lg">
        <Stack spacing={2}>
         <Navbar />
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/auth" exact component={Auth} />
           <Route path="/inscription" exact component={Inscription} />

           <Route path="/profiledata" exact component={Profile} />
           <Route path="/cv" exact component={Cv} />

         </Switch>
         <Footer />
         </Stack>
        </Container>
      </BrowserRouter>
  );
}
export default App;

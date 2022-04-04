import React from 'react';
import {Container} from '@material-ui/core';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

const  App =() => {

  

  return (
     <BrowserRouter>
        <Container maxwidth="lg">
         <Navbar />
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/" exact component={Auth} />
         </Switch>
     
        </Container>
      </BrowserRouter>
  );
}
export default App;

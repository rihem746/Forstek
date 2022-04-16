import React from 'react';
import {Container} from '@material-ui/core';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Inscription from './components/Auth/Inscription';
import Profile from './components/Auth/donneePersonelle/Profile';
import Cv from './components/Auth/cv/Cv';
import Footer from './components/footer/Footer';
import PostDetails from './components/PostDetails/PostDetails';

const  App =() => {

  const user=JSON.parse(localStorage.getItem('profile'));

  return (
     <BrowserRouter>
        <Container maxWidth="xl">
        
         <Navbar />
         <Switch>
           <Route path="/" exact component={()=><Redirect to="/posts" />}/>
           <Route path="/posts" exact component={Home}/>
           <Route path="/posts/search" exact component={Home}/>
           <Route path="/auth" exact component={()=>(!user? <Auth/> : <Redirect to="/posts" />)} />
           <Route path="/inscription" exact component={()=>(!user? <Inscription /> : <Redirect to="/posts" />)} />

           <Route path="/profiledata" exact component={Profile} />
           <Route path="/cv" exact component={Cv} />
           <Route path="/posts/:id"component={PostDetails} />

         </Switch>
         <Footer />
        </Container>
      </BrowserRouter>
  );
}
export default App;

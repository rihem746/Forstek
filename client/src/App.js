import React from 'react';
import {Container} from '@material-ui/core';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';

import Inscription from './components/Auth/Inscription';
import Profile from './components/Auth/donneePersonelle/Profile';
import Cv from './components/Auth/cv/Cv';
import Footer from './components/footer/Footer';
import PostDetails from './components/PostDetails/PostDetails';

import Video from './chat/Video';

const  App =() => {

  const user=JSON.parse(localStorage.getItem('profile'));

  return (
     <BrowserRouter>
         <Switch>

           <Route path="/" exact component={()=><Redirect to="/posts" />}/>
           
           <Route path="/posts" >
           <Container maxWidth="xl" exact>
             <Navbar />
             <Home />
             <Footer />
          </Container>

          </Route>
           <Route path="/posts/search" exact>
           <Container maxWidth="xl">
             <Navbar />
             <Home />
             <Footer />
          </Container>
          </Route>

           <Route path="/auth" exact component={()=>(!user? <Auth/> : <Redirect to="/posts" />)} />
           <Route path="/inscription" exact component={()=>(!user? <Inscription /> : <Redirect to="/posts" />)} />

           
           <Route path="/profiledata" >
           <Container maxWidth="xl">
             <Navbar />
             <Profile />
             <Footer />
          </Container>
          </Route>
           <Route path="/ajouterAnnonce" exact component={Form} />

          
           <Route path="/cv" >
           <Container maxWidth="xl">
             <Navbar />
             <Cv/>
             <Footer />
          </Container>
          </Route>
           <Route path="/posts/:id" >
           <Container maxWidth="xl">
             <Navbar />
             <PostDetails/>
             <Footer />
          </Container>
          </Route>
           <Route path="/video"component={Video} />
             
         </Switch>

      </BrowserRouter>
  );
}
export default App;

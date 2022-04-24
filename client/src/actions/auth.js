import {AUTH} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData,history)=> async(dispatch)=>{
    try {
        //log in the user
        const  {data}= await api.signIn(formData);
        dispatch({type: AUTH,data});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData,history)=> async(dispatch)=>{
    try {
        //Sign up the user
        const  {data}= await api.signUp(formData);
        dispatch({type: AUTH,data});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};
export const updateUser = (id,user)=>async(dispatch)=>{
    try {
       const {data} = await api.updateUser(id , user);
       console.log("userUpdating:",data);
       dispatch({type:'UPDATE',payload:data});
  
    } catch (error) {
      console.log(error);
    }
  }

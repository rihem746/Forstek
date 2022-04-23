import * as api from '../api';

export const createCv =(cv) => async (dispatch) =>{
    try {
       
       const {data} = await api.createCv({cv});
       dispatch({type: 'CREATE' ,payload: data});
    } catch (error) {
      console.log(error);
      
    }
   
   }

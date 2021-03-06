import React, { useState } from 'react';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import useStyles from '../styles';
import Input from '../Input';
import { Grid, Typography } from '@material-ui/core';


const Info = ({formData, setFormData}) => {
    const classes=useStyles();
    console.log('info  :::  ',formData);
   
    const [infoData, setInfoData] = useState(formData.info);
//console.log(formData.info.genre);
    const handleChange=(e) =>{
          setInfoData ({...infoData ,[e.target.name]: e.target.value});
          setFormData ({...formData, info: infoData});
    };
    

    return ( 
        <>           
            <Input name="firstName" label="Nom" handleChange ={handleChange} half value={infoData.firstName}/>
            <Input name="lastName" label="Prénom" handleChange ={handleChange} half value={infoData.lastName}/>
            <Input name="poste" label="Poste" handleChange ={handleChange} value={infoData.poste}/>

            <Input name="email" label="Adresse e-mail" handleChange ={handleChange} type="email" value={infoData.email}/>

            <Input name="phone" label="Téléphone" handleChange ={handleChange} value={infoData.phone}/>
            <Input name="adresse" label="Adresse" handleChange ={handleChange} value={infoData.adresse}/>

            <FormLabel id="Date de naissance" >Date de naissance *</FormLabel>
            <Input name="dateNaissance" handleChange ={handleChange} type="date" value={infoData.dateNaissance} />
            <Grid container spacing={2}>


                <Input label='Femme' type="radio" name="genre" half value="femme" checked={true} onChange={handleChange} />
                <Input type="radio" label='Homme' half name="genre" value="homme" onChange={handleChange} />
            </Grid>
                     
    </>

     );
}
 
export default Info;
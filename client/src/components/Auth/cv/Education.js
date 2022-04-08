import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';


import useStyles from '../styles';
import Input from '../Input';


const Education = ({formData, setFormData}) => {
    
    const [educationData, setEducationData] = useState({
        diplome:'' ,specialite:'' ,universite:'' ,ville:'', dateDebut:'', dateFin:'',
    });
    const classes=useStyles();
   
    const handleChange=(e) =>{
          setEducationData ({...educationData ,[e.target.name]: e.target.value});
          setFormData ({...formData, education: educationData})
    };
    

    return ( 
    <>
        <Input name="diplome" label="Diplome" handleChange ={handleChange} half value={educationData.diplome}/>
        <Input name="specialite" label="Specialité" handleChange ={handleChange} half value={educationData.specialite}/>

        <FormLabel id="duree d'etude" >Periode d'étude</FormLabel>
        <Input name="dateDebut" handleChange ={handleChange} type="date" value={educationData.dateDebut} />
        <Input name="dateFin" handleChange ={handleChange} type="date" value={educationData.dateFin} />

        <Input name="universite" label="Universite/College" handleChange ={handleChange} value={educationData.universite} half/>
        <Input name="ville" label="ville" handleChange ={handleChange} value={educationData.ville} half/>

    </>
     );
}
 
export default Education;
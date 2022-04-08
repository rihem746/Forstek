import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';

import useStyles from '../styles';
import Input from '../Input';

const Experience = ({formData, setFormData}) => {
    
    const classes=useStyles();

    const [experienceData, setExperienceData ] = useState({
        jobTitle:'' ,entrepriseName:'' ,location:'', dateDebut:'', dateFin:'' ,description:'',
    });
   
    const handleChange=(e) =>{
          setExperienceData ({...experienceData ,[e.target.name]: e.target.value});
          setFormData ({...formData, experience: experienceData})
    };
    

    return ( 
    <>
        <Input name="jobTitle" label="Intitulé de poste" handleChange ={handleChange} value={experienceData.jobTitle}/>

        <Input name="entrepriseName" label="Nom entreprise" handleChange ={handleChange} half value={experienceData.entrepriseName}/>
        <Input name="location" label="Localisation" handleChange ={handleChange} half value={experienceData.location}/>

        <FormLabel id="duree d'etude" >Periode d'étude</FormLabel>
        <Input name="dateDebut" handleChange ={handleChange} type="date" value={experienceData.dateDebut} />
        <Input name="dateFin" handleChange ={handleChange} type="date" value={experienceData.dateFin} />

        <Input name="description" label="Description" handleChange ={handleChange} value={experienceData.description}/>

    </>
                    
     );
}
 
export default Experience;
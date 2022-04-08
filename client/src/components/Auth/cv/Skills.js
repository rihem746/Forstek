import React, { useState } from 'react';

import useStyles from '../styles';
import Input from '../Input';

const Skills = ({formData, setFormData}) => {
    
    const [skillData, setSkillData] = useState({
        skill:'' ,
    });
    const classes=useStyles();
   
    const handleChange=(e) =>{
          setSkillData ({...skillData ,[e.target.name]: e.target.value});
          setFormData ({...formData, skills: skillData})
    };

    return (               
        <Input name="skill" label="Skill" handleChange ={handleChange} value={skillData.skill}/>
     );
}
 
export default Skills;
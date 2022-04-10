import React, { useState } from 'react';
import { Button, Typography} from '@material-ui/core';


import useStyles from '../styles';


const CvPdf = () => {
    const classes=useStyles();
   
    const [cvData, setCvData] = useState(null);

    const handleChange=(e) =>{
        setCvData( e.target.files[0] );
    };

    const handleSubmit=(e) =>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("cv",cvData);
        console.log("cv::",cvData);

        //console.log('data >>>> ',formData);

        //dispatch(signup(formData,history));
    };
    

    return ( 
        < >
        <Typography variant= "h5">Charger un cv existant</Typography>
        <Typography variant= "h5">
        <form className={classes.form} onSubmit={handleSubmit}>
            <input type="file" name="cvData" accept="application/pdf" onChange={handleChange} required />
            <Button type='submit' fullwidth variant="contained" color="primary" className={classes.submit} >
                Upload
            </Button>
        </form>
        </Typography>
        </>

     );
}
 
export default CvPdf;
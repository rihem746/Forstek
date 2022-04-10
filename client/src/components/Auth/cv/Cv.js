import React, { useState } from "react";
import './Cv.css';
import { Button , Paper, Grid,Typography,Container} from '@material-ui/core';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import useStyles from '../styles';
import Info from "./Info";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import CvPdf from "./CvPdf";

const steps = ["Information personelle", "Education", "Experience", "skills"];

const Cv=()=> {

    const classes=useStyles();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState(
        {
            info:
                {firstName:'' , lastName:'' ,poste:'' ,phone:'' ,adresse:'' ,email:'', dateNaissance:'', genre:'femme'},
            education: // array
                {diplome:'' ,specialite:'' ,universite:'' ,ville:'', dateDebut:'', dateFin:''},
            experience: // array
                {jobTitle:'' ,entrepriseName:'' ,location:'', dateDebut:'', dateFin:'' ,description:''},
            skills: // array
                {skill:'' },
        }
    );
    console.log('data init >>>> ',formData);
    
      const FormTitles = ["Information personelle", "Education", "Experience", "skills"];

      const handleSubmit=(e) =>{
        e.preventDefault();
            
        console.log('data final >>>> ',formData);

        //dispatch(signup(formData,history));
    };

    const PageDisplay = () => {
        switch(page) {
            case 0:
                return <Info formData={formData} setFormData={setFormData} />;
            case 1:
                return <Education formData={formData} setFormData={setFormData} />;
            case 2: 
                return <Experience formData={formData} setFormData={setFormData} />;
            default:
                return <Skills formData={formData} setFormData={setFormData} />;
        }
      };

  return (
    <Container component="main" maxWidth="gl">

        <Paper className={classes.paper} elevation={3}>
            <CvPdf />
        </Paper>

        <Paper className={classes.paper} elevation={3}>
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={page} alternativeLabel>
                {steps.map((label) => (
             <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>
            <Typography variant= "h5">{FormTitles[page]}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {PageDisplay()}
                </Grid>
                <Grid container spacing={2}>
                <Grid container justify="center" item xs>
                <Button fullwidth variant="contained" color="secondary" className={classes.submit}
                    disabled={page === 0}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage((currPage) => currPage - 1);
                    }}
                >
                Prev
                </Button>
                </Grid>

                <Grid container justify="center" item xs>
                <Button
                type='submit' fullwidth variant="contained" color="primary" className={classes.submit}
                onClick={(e) => {
                    e.preventDefault();
                    if (page === FormTitles.length - 1) {
                        alert("FORM SUBMITTED");
                    } else {
                        setPage((currPage) => currPage + 1);
                        
                    }
                }}
                >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </Button>
                </Grid>
                </Grid>
           </form>

        </Paper>
    </Container>
  );
}

export default Cv
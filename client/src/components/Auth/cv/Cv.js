import React, { useState } from "react";
import './Cv.css';
import { Button , Paper, Grid,Typography,Container} from '@material-ui/core';

import useStyles from '../styles';
import Info from "./Info";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Cv=()=> {

    const classes=useStyles();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        info:{firstName:'' , lastName:'' ,poste:'' ,phone:'' ,adresse:'' ,email:'', dateNaissance:'', genre:'femme'},
        education:{diplome:'' ,specialite:'' ,universite:'' ,ville:'', dateDebut:'', dateFin:''},
        experience:{jobTitle:'' ,entrepriseName:'' ,location:'', dateDebut:'', dateFin:'' ,description:''},
        skills:{skill:'' },
      });
    
      const FormTitles = ["Information personelle", "Education", "Experience", "skills"];

      const handleSubmit=(e) =>{
        e.preventDefault();
            
        console.log('data >>>> ',formData);

        //dispatch(signup(formData,history));
    };

    const PageDisplay = () => {
        switch(page) {
            case 0:
                return <Info ormData={formData} setFormData={setFormData} />;
            case 1:
                return <Education formData={formData} setFormData={setFormData} />;
            case 2: 
                return <Experience formData={formData} setFormData={setFormData} />;
            default:
                return <Skills formData={formData} setFormData={setFormData} />;
        }
      };

  return (
    <Container component="main" maxWidth="xs">
        <div className="progressbar">
            <div style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
        </div>
        <Paper className={classes.paper} elevation={3}>
            <Typography variant= "h5">{FormTitles[page]}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {PageDisplay()}
                </Grid>
                <Grid container spacing={2}>
                <Button fullwidth variant="contained" color="secondary" className={classes.submit}
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                Prev
                </Button>

                <Button
                type='submit' fullwidth variant="contained" color="primary" className={classes.submit}
                onClick={() => {
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
           </form>

        </Paper>
    </Container>
  );
}

export default Cv
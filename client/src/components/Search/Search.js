import React, { useState , useEffect} from 'react';
import { TextField, Button, Typography, Paper, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './styles';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Search = () => {
    const classes= useStyles();
    const [searchData, setSearchData] = useState(null);

    const handleChange=(e) =>{
        setSearchData(e.target.value);
    };
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log('aaaa  ',searchData);
        setSearchData('');
    };

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        width: '100%',
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item >
          <ButtonBase sx={{ width: 300, height: 200, margin: 1.2 }}>
            <Img alt="work" src="https://cdn.dribbble.com/users/1648363/screenshots/3510409/media/a7d7fe59a9704ca12a2deab63739314f.gif" />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item className={classes.SearchDiv}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit} className={classes.Form}>
              <Typography gutterBottom variant="h4" component="div" >
                Rechercher un employer
              </Typography>
            
                <TextField
                className={classes.Input}
                placeholder="Rechercher..."
                onChange={handleChange}
                value={searchData}
                    InputProps={{
                   endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <SearchIcon />
                            <Button type='submit'>Rechercher</Button>
                        </IconButton>
                    </InputAdornment>
                    )
                    }}
                />
            </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Search;
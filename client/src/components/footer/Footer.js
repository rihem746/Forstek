import React from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    const classes= useStyles();
  return (
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        </Typography>
        <Typography variant="body2"  align="center">
            Copyright © Forstek 2022
        </Typography>
  </footer>
  )
}

export default Footer;
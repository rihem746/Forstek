import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  Input: {
    width: '97%',
    margin: '10px 0',
  },
  Form: {
    display:'block',
    textAlign: 'center',
    margin: '10px 0',
  },
  Text:{

  },
  SearchDiv:{
    margin:'auto 0',
  },

}));
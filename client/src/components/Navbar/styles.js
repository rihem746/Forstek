import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor:'#444',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profileData:{
    display:'block',
    padding:'0 20px',
    width:'100%',
  },
  userName: {
    fontSize: '0.8rem',
    letterSpacing: '0.079em',
    fontWeight: '400',
    margin : 'auto',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    margin : 'auto',
  },
  logout:{
    width:'100%',
    padding:'0 10px',

    fontSize: '0.8rem',
    letterSpacing: '0.079em',
    fontWeight: '700',
    margin : '5px',
    textAlign: 'center',

    backgroundColor:'#da372e',

    color:'#fff'

  }
}));
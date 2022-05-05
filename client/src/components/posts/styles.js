import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    margin:'auto',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  Card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    marginTop:'15px',
    width: '100%',
    position: 'relative',
    maxWidth: 345,
    backgroundColor: '#d3d3d3',
  },
}));
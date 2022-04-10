import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  Card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    maxWidth: 345,
    backgroundColor: '#d3d3d3',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 5px',
  },
  title: {
    padding: '0 5px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardDetails:{
    padding: '5px 16px',
  },
});
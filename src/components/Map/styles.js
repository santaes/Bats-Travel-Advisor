import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },
  mapContainer: {
    height: '85vh',
    width: '90%',
    marginLeft: '2rem',
    marginTop: '2rem',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
    objectFit: 'contain',
  },
}));

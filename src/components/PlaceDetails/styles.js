import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hover: {
    paddingRight: '12px',
    paddingLeft: '12px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      background: 'blue',
      color: 'white',
    },
  },
}));

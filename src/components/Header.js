import React from 'react';
import { AppBar, Typography, makeStyles }  from '@material-ui/core';
import coronaImage from '../images/image.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '15px 20px'
    },
    title: {
      flexGrow: 1,
      color: 'black',
      fontWeight: 'bold',
    },
    subtitle: {
      flexGrow: 1,
      color: 'yellow',
    },
    image: {
      width: '1000px',
      height: '100px',
    }
  }));
  
export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
              <img src={coronaImage} alt='COVID-19' />
              <Typography variant='h3' className={classes.title} align='center'>
                TRACKER
              </Typography>
              <Typography variant='h6' className={classes.subtitle} align='center'>
                (Mudassar Hanif)
              </Typography>
            </AppBar>
        </div>
    )
}


export default Header;
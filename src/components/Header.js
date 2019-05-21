import React from 'react';
import injectSheet from 'react-jss';

const Header = ({ classes }) => (
  <div className={classes.container}>
    <img src="images/me2.png" alt="Me" className={classes.image} />
    <div className={classes.info}>
      <h1 className={classes.name}>Andrés A. Acevedo</h1>
      <h2 className={classes.title}>Full-Stack Developer</h2>
    </div>
  </div>
);

const styles = {
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    backgroundImage: 'url(./images/header_bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'start',
    '@media (max-width: 1000px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundSize: '100% 100%',
    },
  },
  image: {
    paddingTop: 68,
    marginLeft: 108,
    paddingBottom: 80,
    '@media (max-width: 1000px)': {
      paddingTop: 20,
      marginLeft: 0,
      paddingBottom: 10,
    },
  },
  info: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  name: {
    color: '#2c2c4b',
    marginTop: 68,
    marginLeft: 58,
    fontSize: '3rem',
    textShadow: '2px 2px #80475e',
    '@media (max-width: 1000px)': {
      marginTop: 0,
      marginLeft: 10,
    },
  },
  title: {
    color: '#2c2c4b',
    marginLeft: 58,
    textShadow: '1px 1px #80475e',
    '@media (max-width: 1000px)': {
      marginLeft: 10,
    },
  },
};
export default injectSheet(styles)(Header);

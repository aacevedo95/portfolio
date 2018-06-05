import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    backgroundColor: '#464646',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'start',
    '@media (max-width: 1000px)': {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },
  image: {
    paddingTop: 68,
    marginLeft: 108,
    paddingBottom: 80,
    '@media (max-width: 1000px)': {
      paddingTop: 20,
      marginLeft: 0,
      paddingBottom: 10
    }
  },
  info:{
    flexDirection: 'column',
  },
  name: {
    paddingTop: 68,
    paddingLeft: 58,
    '@media (max-width: 1000px)': {
      paddingTop: 0,
      paddingLeft: 10,
    }
  },
  title:{
    paddingLeft: 58,
    '@media (max-width: 1000px)': {
      paddingLeft: 10,
    }
  }

}

const Header = ({ classes }) => (
  <div className={classes.container}>
    <img src='images/me2.png' alt='Me' className={classes.image} />
    <div className={classes.info}>
      <h1 className={classes.name}>Andrés A. Acevedo</h1>
      <h2 className={classes.title}>Web Developer</h2>
    </div>
  </div>
)

export default injectSheet(styles)(Header)
import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#8DAA91',
    paddingTop: 68,
    paddingLeft: 200,
    paddingRight: 200,
    '@media (max-width: 800px)': {
      paddingLeft: 40,
      paddingRight: 40,
    }
  },
  contact: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    '@media (max-width: 800px)': {
      flexDirection: 'column',
      flexWrap: 'wrap'
    }
  },
  items: {
    paddingTop: 20,
    paddingLeft: 40,
    '@media (max-width: 800px)': {
      paddingLeft: 0,
    }
  }
}


const Contact = ({ classes }) => (
  <div className={classes.container}>
    <h1>Contact</h1>
    <p>
      Feel free to contact me through any of the following:
    </p>
    <div className={classes.contact}>
      <a href='https://www.linkedin.com/in/aaacevedo/' className={classes.items}>
        <img src='images/logos/in.png' alt='' />
      </a>
      <a href='mailto:andres.a.acevedo1995@gmail.com' className={classes.items}>
        <img src='images/logos/email.png' alt='' />
      </a>
    </div>

  </div>
)



export default injectSheet(styles)(Contact)
import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#8DAA91',
    paddingLeft: 107,
    paddingRight: 107,
    paddingTop: 68
  }
}

const Contact = ({ classes }) => (
  <div className={classes.container}>
    <h1>Contact</h1>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)



export default injectSheet(styles)(Contact)
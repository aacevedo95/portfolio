import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#34344A',
    paddingLeft: 107,
    paddingRight: 107,
    paddingTop: 68,
    '@media (max-width: 800px)': {
      paddingLeft: 40,
      paddingRight: 40,
    }
  }
}

const About = ({ classes }) => (
  <div className={classes.container}>
    <h1>About Me</h1>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)


export default injectSheet(styles)(About)
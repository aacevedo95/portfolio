import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#C89B7B',
    paddingLeft: 107,
    paddingRight: 107,
    paddingTop: 68
  }
}

const Skills = ({ classes }) => (
  <div className={classes.container}>
    <h1>Skills</h1>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)



export default injectSheet(styles)(Skills)
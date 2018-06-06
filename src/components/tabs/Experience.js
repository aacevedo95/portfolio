import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#80475E',
    paddingLeft: 107,
    paddingRight: 107,
    paddingTop: 68
  }
}

const Experience = ({ classes }) => (
  <div className={classes.container}>
    <h1>Experience</h1>
    <p>
      What have I done?
    </p>
  </div>
)


export default injectSheet(styles)(Experience)
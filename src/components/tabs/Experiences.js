import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#80475E',
    paddingTop: 68,
    paddingLeft: 200,
    paddingRight: 200,
    '@media (max-width: 800px)': {
      paddingLeft: 40,
      paddingRight: 40,
    }
  }
}

const Experiences = ({ classes }) => (
  <div className={classes.container}>
    <h1>Experience</h1>
    <p>
      What have I done?
    </p>
  </div>
)


export default injectSheet(styles)(Experiences)
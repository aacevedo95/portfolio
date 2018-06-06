import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#CC5A71',
    paddingTop: 68,
    paddingLeft: 200,
    paddingRight: 200,
    '@media (max-width: 800px)': {
      paddingLeft: 40,
      paddingRight: 40,
    }
  }
}

const Projects = ({ classes }) => (
  <div className={classes.container}>
    <h1>Project</h1>
    <p>
      Again, what HAVE i done?
    </p>
  </div>
)


export default injectSheet(styles)(Projects)
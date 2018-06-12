import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  '@global body': {
    backgroundColor: '#CC5A71',
    paddingBottom: 20
  },
  container: {
    height: '100%',
    color: 'white',
    paddingTop: 50,
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
    <h1>Projects</h1>
    <p>
      Again, what HAVE i done?
    </p>
  </div>
)

export default injectSheet(styles)(Projects)
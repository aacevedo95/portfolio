import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#C89B7B',
    paddingTop: 68,
    paddingLeft: 200,
    paddingRight: 200,
    '@media (max-width: 800px)': {
      paddingLeft: 40,
      paddingRight: 40,
    }
  }
}

const Skills = ({ classes }) => (
  <div className={classes.container}>
    <h1>Skills</h1>
    <p>
      How do i do those things?
    </p>
  </div>
)



export default injectSheet(styles)(Skills)
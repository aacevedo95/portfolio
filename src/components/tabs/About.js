import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#34344A',
    paddingLeft: 200,
    paddingRight: 200,
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
      My name is Andrés, I've been interested in computers ever since being a small kid.
      I've lived in Gurabo, Puerto Rico for the most part of my life.
      I am a recent graduate from the University of Puerto Rico, Bayamón. 

    </p>
  </div>
)


export default injectSheet(styles)(About)
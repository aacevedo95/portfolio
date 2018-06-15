import React from 'react'
import injectSheet from 'react-jss'
import Fade from 'react-reveal/Fade';

const styles = {
  '@global body': {
    backgroundColor: '#34344A',
    paddingBottom: 20
  },
  container: {
    height: '100%',
    color: 'white',
    paddingTop: 50,
    paddingLeft: 200,
    paddingRight: 200,
    lineHeight: '1.5rem',
    '@media (max-width: 800px)': {
      paddingLeft: 40,
      paddingRight: 40,
    }
  }
}

const About = ({ classes }) => (
  <div className={classes.container}>
    <h1>About Me</h1>
    <Fade bottom>
      <p>
        My name is Andrés, I've been interested in computers ever since being a small kid.
        I am a recent graduate from the University of Puerto Rico, Bayamón.  I'm a self-learner that enjoys
        improving my skills. Throughout all the projects that I've worked on, each one being more complex than the last,
        I've steadily improved my problem-solving skills. I wish to continue to develop all these skills making sure
        to always give my 100%.
      </p>

      <p>
        During my Bachelor's degree, I participated in numerous programming competitions with two other
        colleagues. These competitions helped us prove our problem solving skills in a time limited
        scenario, forcing us to think up the best possible solution in the least amount of time.
        I also was the secretary of the Computer Science Association, helping manage all the
        events the association had. 
      </p>
    </Fade>
  </div >
)


export default injectSheet(styles)(About)
import React from 'react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media (max-width: 1000px)': {
      flexWrap: 'wrap',
      flexDirection: 'column',
    }
  },
  link: {
    color: 'white',
    backgroundColor: '#0285A1',
    textAlign: 'center',
    textDecoration: 'none',
    flexBasis: '20%',
    paddingTop: 27,
    paddingBottom: 27,
    paddingLeft: 60,
    paddingRight: 60,
    '&:hover': {
      filter: 'brightness(115%)',
      transition: '.4s all',
      boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    '@media (max-width: 1000px)': {
      flexBasis: '100%'
    }
  },
  about: {
    backgroundColor: '#34344A'
  },
  experience: {
    backgroundColor: '#80475E'
  },
  projects: {
    backgroundColor: '#CC5A71'
  },
  skills: {
    backgroundColor: '#C89B7B'
  },
  contact: {
    backgroundColor: '#8DAA91'
  }
}

class TabContainer extends React.Component {
  scrollToBottom = () => {
    this.pageEnd.scrollIntoView({ behavior: "smooth" });
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Link
          to='/'
          className={[classes.link, classes.about].join(' ')}
        >
          About Me
        </Link>
        <Link
          to='/experiences'
          className={[classes.link, classes.experience].join(' ')}
        >
          Experiences
        </Link>
        <Link
          to='/projects'
          className={[classes.link, classes.projects].join(' ')}
        >
          Projects
        </Link>
        <Link
          to='/skills'
          className={[classes.link, classes.skills].join(' ')}
        >
          Skills
        </Link>
        <Link
          to='/contact'
          className={[classes.link, classes.contact].join(' ')}
          onClick={window.scrollTo(0, 0)}
        >
          Contact
        </Link>
        <div
          style={{ float: "left", clear: "both" }}
          ref={(elem) => { this.pageEnd = elem; }}
        />
      </div >
    )
  }
}
export default injectSheet(styles)(TabContainer)
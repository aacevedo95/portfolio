import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media (max-width: 1000px)': {
      flexWrap: 'wrap',
      flexDirection: 'column',
    }
  },
  link: {
    textDecoration: 'none',
    textAlign: 'center',
    color: 'white',
    flexBasis: '20%',
    paddingTop: 27,
    paddingBottom: 27,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#0285A1',
    '&:hover': {
      filter: 'brightness(115%)',
      transition: '.4s all',
      boxShadow: '0 0   20px  0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',

    },
    '@media (max-width: 800px)': {
      flexBasis: '100%',
      flexWrap: 'wrap',
    }
  },
  activeLink: {
    backgroundColor: 'black'
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

const TabContainer = ({ classes }) => (
  <div className={classes.container}>
    <NavLink
      exact to='/portfolio'
      className={[classes.link, classes.about].join(' ')}
      activeClassName={classes.activeLink}
    >
      About Me
    </NavLink>
    <NavLink
      to='/experience'
      className={[classes.link, classes.experience].join(' ')}
      activeClassName={classes.activeLink}
    >
      Experience
    </NavLink>
    <NavLink
      to='/projects'
      className={[classes.link, classes.projects].join(' ')}
      activeClassName={classes.activeLink}
    >
      Projects
    </NavLink>
    <NavLink
      to='/skills'
      className={[classes.link, classes.skills].join(' ')}
      activeClassName={classes.activeLink}
    >
      Skills
    </NavLink>
    <NavLink
      to='/contact'
      className={[classes.link, classes.contact].join(' ')}
      activeClassName={classes.activeLink}
    >
      Contact
    </NavLink>
  </div>
)

export default injectSheet(styles)(TabContainer)
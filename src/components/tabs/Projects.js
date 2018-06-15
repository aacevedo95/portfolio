import React from 'react'
import injectSheet from 'react-jss'
import Slide from 'react-reveal/Slide';

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
    lineHeight: '1.5rem',
    '@media (max-width: 800px)': {
      paddingLeft: 40,
      paddingRight: 40,
    }
  },
  row: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    flexBasis: '100%',
    '@media (max-width: 800px)': {
      flexFlow: 'column nowrap',
    }
  },
  rowImages: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    '@media (max-width: 800px)': {
      flexFlow: 'column nowrap',
      width: '100%'
    }
  },
  largeLogo: {
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    paddingTop: 0,
    width: '100%',
    height: 'auto',
    marginRight: 20,
    '@media (max-width: 800px)': {
      marginTop: 5,
      width: '100%'
    }
  },
  lineStyle: {
    border: 0,
    height: 1,
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
  }
}

const Projects = ({ classes }) => (
  <div className={classes.container}>
    <h1>Projects</h1>
    <Slide left cascade>
      <div className={classes.row}>
        <p>
          Clock IO
        <br />
          • React, Redux, Go, PostgreSQL
        <br /><br />
          Time tracking application developed with a friend. Used to solve time management issues
        when working with personal or professional projects. <a href='https://clockio.online'>Site</a>
        </p>
      </div>
      <div className={classes.rowImages}>
        <img src='images/clock1.png' alt='' className={classes.largeLogo} />
        <img src='images/clock2.png' alt='' className={classes.largeLogo} />
        <img src='images/clock3.png' alt='' className={classes.largeLogo} />
      </div>
    </Slide>
    <br /><hr className={classes.lineStyle} />
    <Slide right cascade>
      <div className={classes.row}>
        <p>
          Mercado Paso Fino
        <br />
          • React, NodeJS, MongoDB
        <br /><br />
          Market for farm owners and independent owners of "Paso Fino" horses to list their
          horses for sale and/or rent.
        </p>
      </div>
      <div className={classes.rowImages}>
        <img src='images/mpf1.png' alt='' className={classes.largeLogo} />
        <img src='images/mpf2.png' alt='' className={classes.largeLogo} />
        <img src='images/mpf3.png' alt='' className={classes.largeLogo} />
      </div>
    </Slide>
    <br /><hr className={classes.lineStyle} />
    <Slide left cascade>
      <div className={classes.row}>
        <p>
          SpyPi
        <br />
          • React, NodeJS, MongoDB
        <br /><br />
          Graduation project for my Computer Science Bachelors. An inexpensive smart home
          monitoring system using Raspberry Pi, Arduino and several other sensors and camera.
        </p>
      </div>
      <div className={classes.rowImages}>
        <img src='images/tesinaPoster.png' alt='' className={classes.largeLogo} />
      </div>
    </Slide>
  </div>
)

export default injectSheet(styles)(Projects)
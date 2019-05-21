import React from 'react';
import injectSheet from 'react-jss';
import ProjectItem from './common/ProjectItemComponent';

const Projects = ({ classes }) => (
  <div className={classes.container}>
    <h1>Projects</h1>

    <ProjectItem
      slideRight
      title="IPF Points"
      stack="React Native"
      description="App developed for clients, calculates IPF Points based on the IPF Points formula. 
      Deployed to both iOS and android app stores. Developed with React Native and NativeBase used for styling."
      images={[
        'images/ipf_banner.png',
        'images/ipf_android.png',
        'images/ipf_ios.png',
      ]}
    />
    <ProjectItem
      slideLeft
      title="Connecting U Admin Panel"
      stack="React, Back4App, ParseAPI"
      description="Hosted on Heroku. Made so that the owner could manage users and
      order statuses."
      images={[
        'images/connecting1.png',
        'images/connecting2.png',
        'images/connecting3.png',
      ]}
    />
    <ProjectItem
      slideRight
      title="Clock IO"
      stack="React, Redux, Go, PostgreSQL"
      description="Time tracking application developed with a friend. Used to solve time
      management issues when working with personal or professional projects."
      images={['images/clock1.png', 'images/clock2.png', 'images/clock3.png']}
    />
    <ProjectItem
      slideLeft
      title="Mercado Paso Fino"
      stack="React, NodeJS, MongoDB"
      description="Market for farm owners and independent owners of 'Paso Fino' horses to
      list their horses for sale and/or rent."
      images={['images/mpf1.png', 'images/mpf2.png', 'images/mpf3.png']}
    />
    <ProjectItem
      slideRight
      title="SpyPi"
      stack="React, NodeJS, MongoDB"
      description="Graduation project for my Computer Science Bachelors. An inexpensive
      smart home monitoring system using Raspberry Pi, Arduino and several
      other sensors and camera."
      images={['images/tesinaPoster.png']}
      poster
      lastRow
    />
  </div>
);

const styles = {
  '@global body': {
    backgroundColor: '#CC5A71',
    paddingBottom: 20,
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
    },
  },
};

export default injectSheet(styles)(Projects);

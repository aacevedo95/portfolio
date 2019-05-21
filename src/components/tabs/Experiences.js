import React from 'react';
import injectSheet from 'react-jss';
import ExperienceItem from './common/ExperienceItemComponent';

const Experiences = ({ classes }) => (
  <div className={classes.container}>
    <h1>Experiences</h1>

    <ExperienceItem
      fadeRight
      company="MyStrengthBook"
      duration="(August, 2018 - Present)"
      position="Fullstack Developer"
      description="Worked on various products:
      MyStrengthBook: Worked on both Web App, and Mobile App development. Tasked with maintaining both apps, as well as making new features across front-end and back-end, in a fast paced environment.
      HeeroFit: Mobile App development. Worked with a team to create this new mobile app from"
      image="images/msbLogo.jpg"
    />
    <ExperienceItem
      fadeLeft
      company="Pixnabi Lab"
      duration="(January, 2018 - May 2018)"
      position="Fullstack Developer"
      description="I created a client's 'Paso Fino' horse ecommerce site. The
      site's goal is to centralize all 'Paso Fino' horses that are posted
      for sale on a single site. The technologies I used for the frontend
      were: React, Reactstrap, Materialize CSS. For the Backend: NodeJS,
      Express, MongooseJS. Lastly, a NoSQL database was used for all the
      data. (MongoDB)"
      image="images/pLogo.png"
      customStyle
    />
    <ExperienceItem
      fadeRight
      company="Computer Expert Group Software"
      duration="(October, 2016 - Nov 2017)"
      position="Software Developer"
      description="Worked on the company's tax filing windows application and web app.
      Developed using the MVC framework with Microsoft technologies in an
      Agile enviroment. Technologies used: C#, Angular, and KnockoutJS."
      image="images/ceg.jpg"
    />
    <ExperienceItem
      fadeLeft
      company="Compuchicas Summer Camp (Oracle Academy)"
      duration="(Summer 2015 & 2016)"
      position="Mentor"
      description="Mentored 40 high school students in a Computer Science summer camp. I
      offered the students an introductory programming course using Scratch."
      image="images/o.png"
      lastRow
    />
  </div>
);

const styles = {
  '@global body': {
    backgroundColor: '#80475E',
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
  rowLeft: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    '@media (max-width: 800px)': {
      flexFlow: 'column nowrap',
    },
  },
  rowRight: {
    display: 'flex',
    flexFlow: 'row-reverse nowrap',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    '@media (max-width: 800px)': {
      flexFlow: 'column nowrap',
      justifyContent: 'center',
    },
  },
  pixLogo: {
    marginLeft: 20,
    width: '60%',
    '@media (max-width: 800px)': {
      width: '50%',
      marginLeft: 0,
    },
  },
  largeLogo: {
    width: '40%',
    height: '40%',
    marginRight: 20,
    '@media (max-width: 800px)': {
      width: '100%',
    },
  },
  lineStyle: {
    border: 0,
    height: 1,
    backgroundImage:
      'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
  },
};

export default injectSheet(styles)(Experiences);

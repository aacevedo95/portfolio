import React from 'react'
import injectSheet from 'react-jss'
import Fade from 'react-reveal/Fade';

const styles = {
  '@global body': {
    backgroundColor: '#80475E',
    paddingBottom: 20
  },
  container: {
    width:'100%',

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
  rowLeft: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    '@media (max-width: 800px)': {
      flexFlow: 'column nowrap',
    }
  },
  rowRight: {
    display: 'flex',
    flexFlow: 'row-reverse nowrap',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    '@media (max-width: 800px)': {
      flexFlow: 'column nowrap',
      justifyContent: 'center'
    }
  },
  pixLogo: {
    marginLeft: 20,
    '@media (max-width: 800px)': {
      width: '50%',
      marginLeft: 0,
    }
  },
  largeLogo: {
    width: '40%',
    height: 'auto',
    marginRight: 20,
    '@media (max-width: 800px)': {
      width: '100%'
    }
  },
  lineStyle:{
    border: 0, 
    height: 1, 
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
  }
}

const Experiences = ({ classes }) => (
  <div className={classes.container}>
    <h1>Experiences</h1>
    <Fade left cascade>
      <div className={classes.rowLeft} >
        <p>
          Pixnabi Lab
          <br />
          (January, 2018 - May 2018)
          <br />
          • Fullstack Developer
          <br /><br />
          I created a client's "Paso Fino" horse ecommerce site. The site's goal is to centralize
          all "Paso Fino" horses that are posted for sale on a single site. The technologies I used for the
          frontend were: React, Reactstrap, Materialize CSS. For the Backend: NodeJS, Express, MongooseJS. Lastly,
          a NoSQL database was used for all the data. (MongoDB)
        </p>
        <img src='images/pLogo.png' alt='' className={classes.pixLogo} />
      </div>
    </Fade>
    <hr className={classes.lineStyle}/>
    <Fade right cascade>
      <div className={classes.rowRight} >
        <p>
          Computer Expert Group Software
          <br />
          (October, 2016 - Nov 2017)
          <br />
          • Software Developer Intern
          <br /><br />
          Worked on the company's tax filing windows application and web app.
          Developed using the MVC framework with Microsoft technologies in an Agile enviroment.
          Technologies used: C#, Angular, and KnockoutJS.
        </p>
        <img src='images/ceg.jpg' alt='' className={classes.largeLogo} />
      </div>
    </Fade>
    <hr className={classes.lineStyle}/>
    <Fade left cascade>
      <div className={classes.rowLeft}>
        <p>
          Compuchicas Summer Camp (Oracle Academy)
          <br />
          (Summer 2015 & 2016)
          <br />
          • Mentor
          <br /><br />
          Mentored 40 high school students in a Computer Science summer camp.
          I offered the students an introductory programming course using Scratch.
        </p>
        <img src='images/o.png' alt='' className={classes.largeLogo} />
      </div>
    </Fade>
  </div>
)

export default injectSheet(styles)(Experiences)
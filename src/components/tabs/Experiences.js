import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#80475E',
    paddingTop: 68,
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
  }
}

const Experiences = ({ classes }) => (
  <div className={classes.container}>
    <h1>Experiences</h1>
    <div className={classes.rowLeft}>
      <p>
        Pixnabi Lab
        <br />
        •(January, 2018 - May 2018)
        <br />
        • Fullstack Developer
        <br /><br/>
        I created a client's 'Paso Fino' horse ecommerce site. The site's goal is to centralize
        all 'Paso Fino' horses that are posted for sale on a single site.
      </p>
      <img src='images/pLogo.png' alt='' />
    </div>
    <hr />
    <div className={classes.rowRight}>
      <p>
        Work place 2
      </p>
      <img src='images/ceg.jpg' alt='' />
    </div>
  </div>
)


export default injectSheet(styles)(Experiences)
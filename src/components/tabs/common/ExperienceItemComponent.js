import React from 'react';
import injectSheet from 'react-jss';
import Fade from 'react-reveal/Fade';

const ExperienceItem = ({
  classes,
  fadeRight,
  fadeLeft,
  company,
  duration,
  position,
  description,
  image,
  customStyle,
  lastRow,
}) => (
  <div>
    <Fade right={fadeRight} left={fadeLeft} cascade>
      <div className={fadeRight ? classes.rowRight : classes.rowLeft}>
        <p>
          {company}
          <br />
          {duration}
          <br />• {position}
          <br />
          <br />
          {description}
        </p>
        <img
          src={image}
          alt=""
          className={customStyle ? classes.pixLogo : classes.largeLogo}
        />
      </div>
    </Fade>
    {!lastRow && <hr className={classes.lineStyle} />}
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

export default injectSheet(styles)(ExperienceItem);

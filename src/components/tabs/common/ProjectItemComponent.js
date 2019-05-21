import React from 'react';
import injectSheet from 'react-jss';
import Slide from 'react-reveal/Slide';

const ProjectItem = ({
  classes,
  slideRight,
  slideLeft,
  title,
  stack,
  description,
  images,
  poster,
  lastRow,
}) => (
  <div>
    <Slide right={slideRight} left={slideLeft} cascade>
      <div className={classes.row}>
        <p>
          {title}
          <br />• {stack}
          <br />
          <br />
          {description}
        </p>
      </div>
      {poster ? (
        <div className={classes.rowImages}>
          <img src={images[0]} alt="" className={classes.poster} />
        </div>
      ) : (
        <div className={classes.rowImages}>
          <img src={images[0]} alt="" className={classes.largeLogo} />
          <img src={images[1]} alt="" className={classes.largeLogo} />
          <img src={images[2]} alt="" className={classes.largeLogo} />
        </div>
      )}
    </Slide>
    <br />
    {!lastRow && <hr className={classes.lineStyle} />}
  </div>
);

const styles = {
  row: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    flexBasis: '100%',
    '@media (max-width: 800px)': {
      flexFlow: 'column nowrap',
    },
  },
  rowImages: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    '@media (max-width: 800px)': {
      flexFlow: 'column nowrap',
      width: '100%',
    },
  },
  largeLogo: {
    boxShadow:
      '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    paddingTop: 0,
    width: '33%',
    height: '100%',
    marginRight: 20,
    '@media (max-width: 800px)': {
      marginTop: 5,
      width: '100%',
    },
  },
  lineStyle: {
    border: 0,
    height: 1,
    backgroundImage:
      'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
  },
  poster: {
    boxShadow:
      '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)',
    paddingTop: 0,
    width: '100%',
    height: '100%',
    marginRight: 20,
    '@media (max-width: 800px)': {
      marginTop: 5,
      width: '100%',
    },
  },
};

export default injectSheet(styles)(ProjectItem);

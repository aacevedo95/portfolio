import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    width: '100%',
    height: 340,
    backgroundColor: '#2B383B',
    color: 'white'
  }



  
}

const Header = ({ classes }) => (
  <div className={classes.container}>
    Information
  </div>
)

export default injectSheet(styles)(Header)
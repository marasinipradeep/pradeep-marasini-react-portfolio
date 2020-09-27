import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import "./Footer.css"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  footer:{
    position:"absolute",
    bottom: "10",
    width: "100%",
    backgroundColor: "lightgray",
    textAlign: "center"
  }
  

}))
 

 
function Footer() {

  const classes =useStyles()
 
 
  return (
    <footer className={classes.footer}>
     
        <Typography variant="h5" component="h4">
          Pradeep Marasini
        </Typography>
        <Typography component="p">
          @2018 All right reserved
        </Typography>
     
    </footer>
  );
}
 
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default Footer;
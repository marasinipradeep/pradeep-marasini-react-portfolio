import React from 'react';
import {Typography,useMediaQuery} from '@material-ui/core';

import "./Footer.css"

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

  footer:{
    position:"absolute",
    bottom: "0",
    width: "100%",
    backgroundColor: "lightgray",
    textAlign: "center",
    [theme.breakpoints.down("xs")]:{
      position:"inherit",
      bottom:"10"
      
    }
   
  }
}))
 
function Footer() {

  const classes =useStyles()
 
 
  return (
   
    <footer className={classes.footer} >
     
        <Typography variant="h5" component="h4">
          Pradeep Marasini
        </Typography>
        <Typography component="p">
          @2020 All right reserved
        </Typography>
    </footer>
  );
}
 
 
export default Footer;
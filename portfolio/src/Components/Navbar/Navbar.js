import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Home,WorkOutlineOutlined,Assignment,PermContactCalendar,Face} from '@material-ui/icons';


import "./Navbar.css"
import { Grid } from '@material-ui/core';

export default function Navbar() {

  return (
    <Grid container>
      <AppBar  position="static">
        <Toolbar>
          <IconButton color="inherit"><Face />About</IconButton>
          <IconButton color="inherit"><Assignment/> Resume</IconButton>
          <IconButton color="inherit"><WorkOutlineOutlined/>Works</IconButton>
        </Toolbar>
        
      </AppBar>
    </Grid>
  );
}

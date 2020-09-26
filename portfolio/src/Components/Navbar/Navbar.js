import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Home,WorkOutlineOutlined,Assignment,PermContactCalendar,Face} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit"><Face />About</IconButton>
          <IconButton color="inherit"><Assignment/> Resume</IconButton>
          <IconButton color="inherit"><WorkOutlineOutlined/>Works</IconButton>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}

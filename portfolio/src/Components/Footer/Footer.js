import React from 'react';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {LinkedIn,GitHub,Facebook} from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const useStyles = makeStyles((theme) => ({

  root: {
    width: "100%",
    backgroundColor:"rgba(140, 184, 39, 0.856)",
    
  }
}))
 
function Footer() {

  const classes =useStyles()

  const [value, setValue] = React.useState(0);

 
 
  return (
    <div>

    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="LinkedIn" icon={<LinkedIn />} />
      <BottomNavigationAction label="GitHub" icon={<GitHub />} />
      <BottomNavigationAction label="Facebook" icon={<Facebook />} />

    </BottomNavigation>
    </div>
  );
}
 
 
export default Footer;
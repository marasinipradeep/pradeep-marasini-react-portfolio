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
    backgroundColor:"rgba(140, 184, 39, 0.856)"
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
      <BottomNavigationAction className={classes.font} label= "LinkedIn" icon={<LinkedIn />} onClick={()=>window.open("https://www.linkedin.com/in/pradeep-marasini-34b322b4/",'_blank')}/>
      <BottomNavigationAction label="GitHub" icon={<GitHub />} onClick={()=>window.open("https://github.com/marasinipradeep/",'_blank')}/>
      <BottomNavigationAction label="Facebook" icon={<Facebook />} onClick={()=>window.open("https://www.facebook.com/pmarasini1",'_blank')} />

    </BottomNavigation>
    </div>
  );
}
 
 
export default Footer;
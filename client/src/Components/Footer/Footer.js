import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {LinkedIn,GitHub,Facebook} from '@material-ui/icons';

//Using custom CSS
const useStyles = makeStyles((theme) => ({
  root: {
    position:"static",
    bottom:0,
    width: "100%",
    backgroundColor:"#f8fd8"
  },
  font:{
    color:"blue",
    fontWeight:"bold"
  }
}))
 
function Footer() {
  //Import Hook to use styles
  const classes =useStyles()
  //Setting initial state
  const [value, setValue] = React.useState(0);
 
  return (
    <div>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {setValue(newValue);}}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.font} label= "LinkedIn" icon={<LinkedIn />} onClick={()=>window.open("https://www.linkedin.com/in/pradeep-marasini-34b322b4/",'_blank')}/>
      <BottomNavigationAction className={classes.font} label="GitHub" icon={<GitHub />} onClick={()=>window.open("https://github.com/marasinipradeep/",'_blank')}/>
      <BottomNavigationAction className={classes.font} label="Facebook" icon={<Facebook />} onClick={()=>window.open("https://www.facebook.com/pmarasini1",'_blank')} />

    </BottomNavigation>
    </div>
  );
}
 
 
export default Footer;
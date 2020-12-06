// import React from 'react';
// import PropTypes from 'prop-types';
// import {AppBar,Toolbar,Typography,CssBaseline,useScrollTrigger,Fab,Zoom,IconButton} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import {KeyboardArrowUp,Home,Description} from '@material-ui/icons';
// import { Link,useHistory } from 'react-router-dom';





// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: 'fixed',
//     bottom: theme.spacing(3),
//     right: theme.spacing(3),
//     flexGrow: 1,

//   },
//   menuButton: {
//     marginRight: theme.spacing(5),
//     color:"black"

//   },
//   appBar:{
//     backgroundColor:"#D3D3D3"
//   }

// }));

// function ScrollTop(props) {
//   const { children, window } = props;
//   const classes = useStyles();
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

//  export default function Navbar(props) {
//   const classes = useStyles();
//   //useHistory hook let us navigate through the browser
//   let history = useHistory();
//   return (
//     <React.Fragment>
//       <CssBaseline />

//       <AppBar className={classes.appBar}>
//         <Toolbar >
//           <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={()=>history.push("/")}>
//            <Home />HOME
//           </IconButton>

//           <IconButton edge="start" className={classes.menuButton}  aria-label="menu" onClick={()=>history.push("/projects")}>
//          <Description />PROJECTS
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Toolbar id="back-to-top-anchor" />
//       <ScrollTop {...props}>
//         <Fab color="secondary" size="small" aria-label="scroll back to top">
//           <KeyboardArrowUp />
//         </Fab>
//       </ScrollTop>
//     </React.Fragment>
//   );

// }


import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Navbar extends Component {
  state = {}
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (<nav>
      <ul>
        <li><Link
          className='link'
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={this.scrollToTop}
        >Home</Link></li>
        <li><Link
          className='link'
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >About</Link></li>
        <li><Link
          className='link'
          activeClass="active"
          to="usedTechnologies" //Give className on the Div inside component
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Proficient Technologies</Link></li>
        <li><Link
        className='link'
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >Projects</Link></li>
        <li><Link
          className='link'
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Contact</Link></li>
      </ul>
    </nav>);
  }
}

export default Navbar;
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
        >Technologies</Link></li>
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
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import "./Footer.css"
 

 
function Footer(props) {
 
 
  return (
    <footer >
     
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
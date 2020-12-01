import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid } from '@material-ui/core';
//Import profile image
import portfolio from "../Images/portfolio.JPG"

export default function AboutMe() {

    //Setting state
    const [aboutMe, setAboutMe] = useState("I am front end web developer having experience in building, and maintaining responsive website. I am proficient in HTML5, CSS3, Javascript, jQuery, Bootstrap, Material UI, Foundation, plus I have designing knowledge of icons and logo. I am Certified in full stack web development from University of Adelaide, have trained with  MERN stack (Mongo DB, Express Server, React JS, Node JS), PWA (Progressive Web App), testing with Jest, and familiar with JIRA, Github and Gitlab. Also, experienced and versed in Scrum and Agile. ")

    return (
        <div className='about'>
            <div item xs={12} className='about-content'>
                <h1><Fade bottom cascade>About.</Fade></h1>
                <Fade bottom>
                    <p>{aboutMe}</p>
                </Fade>
              
            </div>
            <img src={portfolio} alt='about imge'></img>
        </div>
    );
}
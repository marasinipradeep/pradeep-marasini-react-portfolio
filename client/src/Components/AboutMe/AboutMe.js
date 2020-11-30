import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
//Import profile image
import portfolio from "../Images/portfolio.JPG"

export default function AboutMe() {

    //Setting state
    const [aboutMe, setAboutMe] = useState("I am front end Web Developer experience in building, and maintaining responsive website. Proficient in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Material UI, Foundation, plus designing knowledge of icons, logo and well versed in Scrum, Agile. Certified in full stack web development from University of Adelaide, trained with  MERN stack (Mongo DB, Express Server, React JS, Node JS), PWA (Progressive Web App), testing with Jest, and familiar with JIRA, Github and Gitlab")

    return (<div className='about'>
    <div className='about-content'>
    <h1><Fade bottom cascade>About.</Fade></h1>
    <Fade bottom>
            <p>{aboutMe}</p>
    </Fade>
    </div>
     <img src={portfolio} alt='about imge'></img>
    

</div>  );
}
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid } from '@material-ui/core';
//Import profile image
import portfolioTwo from "../Images/profilePicTwoBackuonep.png"
//import portfolioTwo from "../Images/linkedin.jpg"

export default function AboutMe() {

    //Setting state
    const [aboutMeParagraphOne, setAboutMeOne] = useState(
        `An accomplished and adept professional with years of experience in the IT and hospitality industry. Proficient
        in IT hardware maintenance, IT application support, and software development. Certified full-stack web developer from the University of Adelaide, trained with MySQL, MongoDB, React, Node.js, and many more.`)

    const [aboutMeParagraphTwo, setAboutMeTwo] = useState(
        ` I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.`)
    const [aboutMeParagraphThree, setAboutMeThree] = useState(
        `I’ve worked with small, agile teams on payment projects  spanning multiple years.`)

    const [aboutMeParagraphFour, setAboutMeFour] = useState(
        ` I'm certified in full stack web development from University of Adelaide, and trained with Mongo DB, React JS, Node JS, Express, Progressive Web App, Jest and many more. Also, familiar with Next JS, GraphQL, Apollo, Yoga, Prisma, JIRA, Github, Gitlab and versed in Scrum and Agile.`)

    return (
        <div className="About">
            <div className='about'>
                <div item xs={12} md={9} className='about-content'>

                    <h1><Fade bottom cascade>About.</Fade></h1>
                    <Fade bottom>
                        <p>{aboutMeParagraphOne}</p>
                        {/* <p>{aboutMeParagraphTwo}</p>
                        <p>{aboutMeParagraphThree}</p>
                        <p>{aboutMeParagraphFour}</p> */}
                    </Fade>

                </div>
                <img src={portfolioTwo} alt='about imge' className="profileimage"></img>
            </div>
        </div>
    );
}
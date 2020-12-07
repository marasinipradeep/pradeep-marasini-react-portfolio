import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid } from '@material-ui/core';
//Import profile image
import portfolio from "../Images/portfolio.JPG"

export default function AboutMe() {

    //Setting state
    const [aboutMeParagraphOne, setAboutMeOne] = useState(
        `I'm Pradeep Marasini, Front End Web Developer.I’ve been honing my skills in design, production, building, and maintaining responsive websites.`)

    const [aboutMeParagraphTwo, setAboutMeTwo] = useState(
        ` I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.`)
    const [aboutMeParagraphThree, setAboutMeThree] = useState(
        `I’ve worked with small, agile teams on payment projects  spanning multiple years.`)

    const [aboutMeParagraphFour, setAboutMeFour] = useState(
        ` I'm certified in full stack web development from University of Adelaide, and trained with Mongo DB, React JS, Node JS, Express, Progressive Web App, Jest and many more. Also, familiar with Next JS, GraphQL, Apollo, Yoga, Prisma, JIRA, Github, Gitlab and versed in Scrum and Agile.`)

    return (
        <div className="About">
            <div className='about'>
                <div item xs={12} className='about-content'>
                    <h1><Fade bottom cascade>About.</Fade></h1>
                    <Fade bottom>
                        <p>{aboutMeParagraphOne}</p>
                        <p>{aboutMeParagraphTwo}</p>
                        <p>{aboutMeParagraphThree}</p>
                        <p>{aboutMeParagraphFour}</p>
                    </Fade>

                </div>
                <img src=""></img>
            </div>
        </div>
    );
}
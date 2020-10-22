import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import AboutMe from "../AboutMe/AboutMe"
import ContactMe from "../ContactMe/ContactMe"
import UsedTechnologies from "../UsedTechnologies/UsedTechnologies"

import { Paper, Grid, makeStyles, Typography, Box, Container } from '@material-ui/core';

import Hero from "../Hero/Hero"
import Banner from "../Banner/Banner"

//Import profile image
import portfolio from "../Images/pradeepPhoto.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#f3dfd4"
    },
    img: {
        width: 130,
        height: 200,
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: "100px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
}))
export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <Hero>     

                    <Banner title="Pradeep Marasini" position="React Developer" subtitle="Creative React Developer with certificate in Full Stack Web Development from University of Adelaide.Background in electronics and communication engineering, utilising experience in banking / payment application, embedded system and agile methodology. Awarded as “Best IT Supporter” and is a strong communicator to work effectively with end-users and the team. Motivated to implement innovative technology on real world problems, to make life easier. Demonstrated excellent people-oriented service and know how to handle difficult requests while prioritising work.">
                   

                    </Banner>
            </Hero>
            {/* <AboutMe /> */}
            <UsedTechnologies />

            <ContactMe />
            <Footer />
        </div>
    )
}

import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import AboutMe from "../Components/AboutMe/AboutMe"
import ContactMe from "../Components/ContactMe/ContactMe"
import UsedTechnologies from "../Components/UsedTechnologies/UsedTechnologies"
import Header from '../Components/Header/Header'

import { Paper, Grid, makeStyles, Typography, Box, Container } from '@material-ui/core';

import Hero from "../Components/Hero/Hero"
import Banner from "../Components/Banner/Banner"

import Technologies from "../Components/Technologies/Technologies"



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
            <Header/>
            <Hero>     

                    <Banner title="Pradeep Marasini" position="React Developer" subtitle="Creative React Developer with certificate in Full Stack Web Development from University of Adelaide.Background in electronics and communication engineering, utilising experience in banking / payment application, embedded system and agile methodology. Awarded as “Best IT Supporter” and is a strong communicator to work effectively with end-users and the team. Motivated to implement innovative technology on real world problems, to make life easier. Demonstrated excellent people-oriented service and know how to handle difficult requests while prioritising work.">
                   

                    </Banner>
            </Hero>
            {/* <AboutMe /> */}
            <Technologies/>
            {/* <UsedTechnologies /> */}

            <ContactMe />
            <Footer />
        </div>
    )
}

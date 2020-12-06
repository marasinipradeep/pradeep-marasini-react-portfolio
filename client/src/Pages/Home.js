import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import AboutMe from "../Components/AboutMe/AboutMe"
import ContactMe from "../Components/ContactMe/ContactMe"
import Header from '../Components/Header/Header'

import { Paper, Grid, makeStyles, Typography, Box, Container } from '@material-ui/core';

import Technologies from "../Components/Technologies/Technologies";
import Projects from "../Components/Projects/Projects";
import CardSlides from "../Components/CardSlide/CardSlide"



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
        // backgroundColor: "#f3dfd4"
    },
   
    // img: {
    //     width: 130,
    //     height: 200,
    //     display: 'block',
    //     maxWidth: '100%',
    //     maxHeight: '100%',
    //     borderRadius: "100px",
    //     display: "block",
    //     marginLeft: "auto",
    //     marginRight: "auto",
    // },
}))
export default function Home() {
    const classes = useStyles();
    return (
     
        <Grid className={classes.root} item xs container spacing={0}>
            <Grid item xs={12} display={{ xs: 'block', md: 'block' }}>
            <Navbar />
            </Grid>
            <Header />
            <AboutMe />
            <Technologies />
            <CardSlides/>
            {/* <Projects/> */}
            <ContactMe />
            {/* <Footer /> */}
        </Grid>
    )
}

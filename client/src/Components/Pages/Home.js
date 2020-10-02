import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import AboutMe from "../AboutMe/AboutMe"
import ContactMe from "../ContactMe/ContactMe"

import { Paper, Grid, makeStyles, Typography, Box, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:"#f3dfd4"
    },
}))
export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Navbar/>
           <AboutMe/>
           <ContactMe/>
           <Footer />
        </div>
    )
}

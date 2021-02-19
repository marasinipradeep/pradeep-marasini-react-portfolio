import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import AboutMe from "../Components/AboutMe/AboutMe"
import ContactMe from "../Components/ContactMe/ContactMe"
import Header from '../Components/Header/Header'

import { Paper, Grid, makeStyles, Typography, Box, Container } from '@material-ui/core';

import UsedTechnologiesFlip from "../Components/UsedTechnologiesFlip/UsedTechnologiesFlip";
import RecentProjectsSlides from "../Components/RecentProjectsSlides/RecentProjectsSlides";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
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
            <UsedTechnologiesFlip />
            <RecentProjectsSlides/>
            <ContactMe />
        </Grid>
    )
}

import React from 'react';
import './Banner.css'

import { Paper, Grid, makeStyles, Typography, Box, Container } from '@material-ui/core';
//Import profile image
import portfolio from "../Images/pradeepPhoto.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#f3dfd4"
    },
    img: {
        width: "auto",
        height: "400px",
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: "100px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
}))



function Banner({ children, title, subtitle, position }) {
    const classes = useStyles();
    return (
        <div className="banner">
            <Grid item container >
                <Grid item sm={12} md={6}>
                    <img alt="complex" className={classes.img} src={portfolio} />
                    <h1>{title}</h1>
                    <h2>{position}</h2>
                </Grid>
                <Grid item sm={12} md={6}>
                    <p>{subtitle}</p>
                    {children}
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner;

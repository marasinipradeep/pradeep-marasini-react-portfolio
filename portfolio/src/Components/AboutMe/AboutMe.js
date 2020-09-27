import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, ButtonBase } from '@material-ui/core';



import portfolio from "../Images/pradeepPhoto.jpg"
import "./AboutMe.css"

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: '15px',
        maxWidth: "auto",
        backgroundColor: "rgba(89, 33, 22, 0.75)",
        color: "white",
        borderRadius:"50px"
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
    aboutMeTitle: {
        textAlign: "center",
        color: "white",

    },
    aboutMe: {
        textAlign: "center"

    }
}));

export default function AboutMe() {

    const classes = useStyles();

    const [title, setTitle] = useState("About Me")
    const [name, setName] = useState("Pradeep Marasini")
    const [position, setPosition] = useState("Full Stack Web Developer")
    const [aboutMe, setAboutMe] = useState("Full Stack Web Developer with a background in electronics and communication engineering, utilising experience in banking / payment application, embedded system and agile methodology. Awarded as “Best IT Supporter” and is a strong communicator to work effectively with end-users and the team. Motivated to implement innovative technology on real world problems, to make life easier. Demonstrated excellent people-oriented service and know how to handle difficult requests while prioritising work.")

    return (

        <div className={classes.root}>

            <Paper className={classes.paper}>
                <Typography variant="h2" className={classes.aboutMeTitle} gutterBottom >{title}</Typography>

                <Grid item xs container spacing={3}>

                    <Grid item xs={12} md={3} className={classes.aboutMe}>
                        <img className={classes.img} alt="complex" src={portfolio} />
                        <Typography variant="h4">{name}</Typography>
                        <Typography gutterBottom variant="subtitle1">{position}</Typography>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        {/* <Typography variant="h5" color="primary" className={classes.aboutMe}>{aboutMe}</Typography> */}
                        <Container>
                            <Box my={4} >
                                <Typography variant="h5"  >{aboutMe}</Typography>

                            </Box>
                        </Container>
                    </Grid>
                </Grid>

            </Paper>
        </div>
    );
}
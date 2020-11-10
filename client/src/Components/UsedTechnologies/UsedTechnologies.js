import React, { useState } from 'react';
import { Paper, Grid, makeStyles, Typography, Box, Container } from '@material-ui/core';

//Import profile image
import portfolio from "../Images/pradeepPhoto.jpg"

//Using custom css
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: '30px',
        maxWidth: "auto",
        backgroundColor: "#f0ead2",
        color: "#033500",
        borderRadius: "40px"
    },

   
    aboutMeTitle: {
        textAlign: "center",
        color: "#373e02",

    },
    aboutMe: {
        textAlign: "left"

    }
}));

export default function UsedTechnologies() {

    const classes = useStyles();

    //Setting state
    const [title, setTitle] = useState("Technical Proficiencies")
    const [frontEndTechnologies, setfrontEndTechnologies] = useState(
        [
            "HTML",
            "CSS", 
            "JavaScript", 
            "jQuery",
            "C/C++",
            "Handlebars JS",
            "JSON",
            "JSX",
            "React JS", 
            "Bootstrap",
            "Material UI",
            "Qt-GUI",

        ])
    const [backEndTechnologies, setbackEndTechnologies] = useState(
        [
            "Node JS",
            "Express JS",
            "Libraries: Bcryptjs, JSON webtoken, Multer, Passport-local, socket.io"
        ])

    const [databaseTechnologies, setdatabaseTechnologies] = useState(
        [
            "MySQL",
            "MongoDB",
            "Sqllite",
            "PostgreSQL",
            "ORM: Sequelize",
            "ORM: Mongoose",
        ])

    const [testingTechnologies, settestingTechnologies] = useState(
        [
            "Jest",
            "Bitbucket",
            "Jira",
            "Github",
            "Gitlab",
            "Heroku"
        ])

    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.aboutMeTitle} gutterBottom >{title}</Typography>
                <hr />
                <Grid item xs container spacing={3}>
                    <Grid item xs={12} md={3} className={classes.aboutMe}>
                        <Typography variant="h5">Front End</Typography>
                        <hr />
                        {frontEndTechnologies.map(technology => (
                            <Typography variant="h6">{technology}</Typography>
                        ))}


                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" >Back End</Typography>
                        <hr />
                        {backEndTechnologies.map(technology => (
                            <Typography variant="h6">{technology}</Typography>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" >Database And ORM</Typography>
                        <hr />
                        {databaseTechnologies.map(technology => (
                            <Typography variant="h6">{technology}</Typography>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" >Testing/SDLC/Others</Typography>
                        <hr />
                        {testingTechnologies.map(technology => (
                            <Typography variant="h6">{technology}</Typography>
                        ))}
                    </Grid>
                </Grid>

            </Paper>
        </div>
    );
}
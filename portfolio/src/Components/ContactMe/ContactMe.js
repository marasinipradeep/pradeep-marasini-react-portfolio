import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { LinkedIn, GitHub, Facebook } from '@material-ui/icons';


import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, ButtonBase } from '@material-ui/core';



import portfolio from "../Images/pradeepPhoto.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: '10px',
        maxWidth: "auto",
        backgroundColor: "red"
    },
    image: {
        width: 256,
        height: 256,
    },
    img: {
        width: 200,
        height: 200,
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius:"40px"
    },
}));

export default function ContactMe() {

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <Paper className={classes.paper}>
                <Typography variant="h2" >
                    About Me
                    </Typography>
                <Typography variant="h4">
                    Pradeep Marasini
                    </Typography>
                <Typography gutterBottom variant="subtitle1">
                    Full Stack Web Developer
                    </Typography>


                <Grid item xs container spacing={3}>

                    <Grid item xs={12} md={3}>
                            <img className={classes.img} alt="complex" src={portfolio} />
                    </Grid>
                    
                    <Grid item xs={12} md={9}>
                        <Typography variant="h5" color="primary">
                            Full Stack Web Developer with a background in electronics and communication engineering, utilising experience in banking / payment application, embedded system and agile methodology. Awarded as “Best IT Supporter” and is a strong communicator to work effectively with end-users and the team. Motivated to implement innovative technology on real world problems, to make life easier. Demonstrated excellent people-oriented service and know how to handle difficult requests while prioritising work.
                            </Typography>

                    </Grid>
                </Grid>

            </Paper>
        </div>
    );
}
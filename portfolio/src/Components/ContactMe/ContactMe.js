import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Link } from '@material-ui/core';
import { LinkedIn, GitHub, Facebook, Assignment,Email, Phone} from '@material-ui/icons';


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
        backgroundColor: "white"
    },


}));

export default function ContactMe() {

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <Paper className={classes.paper}>


                <Grid item xs container spacing={3}>

                    <Grid item xs={6} md={3}>
                         <Link component="button" variant="h6" >Linkd<LinkedIn /> </Link>
                    
                    </Grid>

                    <Grid item xs={6} md={3}>
                         <Link component="button" variant="h6" >Github<GitHub /> </Link>
                    
                    </Grid>
                    <Grid item xs={6} md={3}>
                         <Link component="button" variant="h6" >Facebook<Facebook /> </Link>
                    
                    </Grid>

                    <Grid item xs={6} md={3}>
                         <Link component="button" variant="h6" >DownLoad CV <Assignment/></Link>
                    
                    </Grid>

                    <Grid item xs={6} md={3}>
                    Email <Email/>   <Link component="button" variant="h6" >marasinipradeep@gmail.com</Link>
                    
                    </Grid>

                    <Grid item xs={6} md={3}>
                    Phone<Phone/>: <Link component="button" variant="h6" > 0420719901</Link>
                    
                    </Grid>

                   
                </Grid>

            </Paper>
        </div>
    );
}
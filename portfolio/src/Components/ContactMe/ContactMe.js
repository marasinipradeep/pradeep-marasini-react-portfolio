import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { LinkedIn, GitHub, Facebook, Assignment, Email, Phone, Home } from '@material-ui/icons';


import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';



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

                <Grid item xs container spacing={3} bottomG>

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
                        <Link component="button" variant="h6" >DownLoad CV <Assignment /></Link>

                    </Grid>
                </Grid>


                <Grid item xs container spacing={3}>

                

                    <Grid item xs={12} md={6}>
                        <Typography component="address" variant="h6" >
                        Email <Email />
                        <Link component="button" variant="h6">
                         marasinipradeep@gmail.com</Link>
                        </Typography>  

                    </Grid>

                    <Grid item xs={12} md={6}>
                         <Typography component="address" variant="h6" >
                         Address<Home /> : 4/10 Lurline Av, Gilles Plain South Australia
                            </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                    <Typography  variant="h6" >
                        Phone<Phone />: <Link variant="h6" > 0420719901</Link>
                        </Typography>

                    </Grid>

                    

                   


                </Grid>



            </Paper>
        </div>
    );
}
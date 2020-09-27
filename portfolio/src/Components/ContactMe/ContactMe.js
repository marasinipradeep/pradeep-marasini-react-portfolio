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
        margin: '20px',
        maxWidth: "100%",
        backgroundColor: "rgba(8, 119, 13, 0.623)",
        textAlign: "center",
        borderRadius: "50px"

    },


}));

export default function ContactMe() {

    const classes = useStyles();

    return (

        <div className={classes.root}>


            <Paper className={classes.paper}>
                <Grid item xs container spacing={3}>

                    <Grid item xs={12} md={12}>
                        <Link component="button" variant="h5" >
                        <a href="https://drive.google.com/file/d/1HOuBSJHaknldgLrKM_jzEGyNSUIMiZp1/view" target="_blank">DownLoad CV </a><Assignment /></Link>

                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Typography component="address" variant="h5" > Email <Email />
                            <Link component="button" variant="h5"> 
                            marasinipradeep@gmail.com</Link>
                        </Typography>
                    </Grid>



                    <Grid item xs={12} md={12}>
                        <Typography variant="h5" >
                            Phone<Phone />: <Link variant="h5" > 0420719901</Link>
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography component="address" variant="h5" >
                            Address<Home /> : 4/10 Lurline Av, Gilles Plain South Australia
                            </Typography>
                    </Grid>






                </Grid>



            </Paper>
        </div>
    );
}
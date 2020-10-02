import React from 'react';
import { Typography, Link, makeStyles, Paper, Grid } from '@material-ui/core';
import { Assignment, Email, Phone, Home } from '@material-ui/icons';


//Using custom styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: '30px',
        maxWidth: "100%",
        backgroundColor: "#f8deb8",
        textAlign: "center",
        borderRadius: "40px"
    }
}));

export default function ContactMe() {

    //Importing Hooks
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid item xs container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Link component="button" variant="h5" >
                            <a href="https://drive.google.com/file/d/1eFrO_qEzWZDXEq5cyVtMUSyOKI-PjZhF/view?usp=sharing" target="_blank">DownLoad CV </a><Assignment /></Link>
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
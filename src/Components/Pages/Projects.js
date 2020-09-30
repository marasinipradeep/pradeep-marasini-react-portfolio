import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Cards from "../Cards/Cards"
import {makeStyles, useTheme} from "@material-ui/core"

const useStyles= makeStyles((useTheme)=>({

    h1:{
        margin:"50px",
        textAlign:"center",
        fontSize:"40px"
        
    }

}))

export default function Projects() {
    const classes = useStyles();
    return (
        <div>
        <Navbar/>
        <h1 className={classes.h1}>Recent Projects</h1>
        <Cards/>
        <Footer />
        </div>
    )
}

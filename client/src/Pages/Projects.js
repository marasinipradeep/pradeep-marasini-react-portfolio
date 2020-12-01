import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import Cards from "../Components/Cards/Cards"
import {makeStyles} from "@material-ui/core"


const useStyles= makeStyles(()=>({

    root:{ 
        flexGrow:1,
        backgroundColor:"#ffffff" 
    },

    h1:{
        margin:"30px",
        textAlign:"center",
        fontSize:"50px",
        color:"Black"
    }

}))

export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Navbar/>
        <h1 className={classes.h1}>RECENT PROJECTS</h1>
        <Cards/>
        {/* <Footer /> */}
        </div>
    )
}

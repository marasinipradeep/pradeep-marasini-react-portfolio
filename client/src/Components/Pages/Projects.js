import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Cards from "../Cards/Cards"
import {makeStyles, useTheme} from "@material-ui/core"
import { Transform } from '@material-ui/icons'

const useStyles= makeStyles((useTheme)=>({

    root:{
        backgroundColor:"#cfb095"

    },

    h1:{
        margin:"30px",
        textAlign:"center",
        fontSize:"50px",
        color:"white"
        
    }

}))

export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Navbar/>
        <h1 className={classes.h1}>RECENT PROJECTS</h1>
        <Cards/>
        <Footer />
        </div>
    )
}

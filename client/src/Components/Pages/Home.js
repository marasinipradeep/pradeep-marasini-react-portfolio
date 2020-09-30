import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import AboutMe from "../AboutMe/AboutMe"
import ContactMe from "../ContactMe/ContactMe"


export default function Home() {
    return (
        <div>
           <Navbar/>
           <AboutMe/>
           <ContactMe/>
           <Footer />
        </div>
    )
}

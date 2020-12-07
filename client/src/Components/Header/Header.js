import React, { useState } from 'react';
import { Fade, Flip, Rotate, Zoom, Bounce, Slide, Roll, LightSpeed } from 'react-reveal';
import ParticlesBg from "particles-bg";
import { Grid } from '@material-ui/core';
//Import profile image
import portfolio from "../Images/profilePic.jpg"
import portfolioOne from "../Images/profilePicOne.jpg"
import portfolioTwo from "../Images/profilePicTwo.png"


function Header() {

    //importing useProject context 
    //const [data, dispatch] = useProjectsContext();
    const [data, setState] = useState(
        {
            name: 'Pradeep Marasini.',
            headerTagline: [//Line 1 For Header
                'Hi 👋 You found me! I am Pradeep Marasini.',
                //Line 2 For Header
                'Front End Developer ',
                //Line 3 For Header
                'From Australia'
            ]
        });

    console.log(`inside header data is ${data}`)


    return (
        <Grid item xs container spacing={3} >
            <Grid item xs={12} md={8} > 

                <h1 className='heading-background'>CREATIVE</h1>
                {/* <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade>
                    </h1>
            </header> */}
                <Fade bottom>
                    {/* <ParticlesBg type="circle" bg={true}/> */}
                    <p className='header-title'>
                        {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
                        {data.headerTagline[2]}

                        <br></br>
                        <Zoom>


                            <button>
                                <a href={process.env.PUBLIC_URL + "/pradeep_marasini_resume.pdf"} download >Download CV </a>
                            </button>
                        </Zoom>


                    </p>

                </Fade>
            </Grid>
           
            <Grid item xs={12} md={4}>
                <img src={portfolioTwo} alt='about imge' className="profileimage"></img>
            </Grid>


        </Grid>
    );

}

export default Header;
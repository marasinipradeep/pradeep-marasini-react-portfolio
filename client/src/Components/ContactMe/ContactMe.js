import React from 'react';
import { Email, Phone, Home } from '@material-ui/icons';
import { Fade } from 'react-reveal';
import { Grid } from '@material-ui/core';

export default function ContactMe() {

    return (
        <div>
            <Grid>
            <h1>
                <Fade bottom cascade> Contact.</Fade>
            </h1>
            <Fade bottom>
                <div className='contact-content'>
                    <h1>
                        Let’s create your next<br></br>
                        <span className='amazing-color'>experience together</span>
                        </h1>
                    <p ><Phone />0420719901</p>
                    <Email />
                     <a href={`mailto:${"marasinipradeep@gmail.com"}`} className='email'>{"marasinipradeep@gmail.com"}
                     </a>
                    <p><Home /> 4/10 Lurline Av, Gilles Plain South Australia</p>
                </div>
            </Fade>
            </Grid>
        </div>
    );
}
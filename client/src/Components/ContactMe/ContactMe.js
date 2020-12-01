import React from 'react';
import { Email, Phone, Home } from '@material-ui/icons';
import { Fade } from 'react-reveal';
import { Grid } from '@material-ui/core';
import { LinkedIn, GitHub} from '@material-ui/icons';

export default function ContactMe() {

    return (
        <div className="contact">

            <h1>
                <Fade bottom cascade> Contact.</Fade>
            </h1>
            <Fade bottom>
                <div className='contact-content'>
                    <h1>
                        Let’s create your next<br></br>
                        <span className='amazing-color'>experience together</span>
                    </h1>
                    <h1><Phone />0420719901</h1>
                    <Email />
                    <a href={`mailto:${"marasinipradeep@gmail.com"}`} className='email'>{"marasinipradeep@gmail.com"}
                    </a>
                    <h1><Home /> 4/10 Lurline Av, Gilles Plain South Australia</h1>

                    <ul>
                        <li> <a 
                            onClick={() => window.open("https://github.com/marasinipradeep/", '_blank')} >
                                <GitHub /> Github

                                </a>
                            </li>
                            <li> <a 
                             onClick={() => window.open("https://www.linkedin.com/in/pradeep-marasini-34b322b4/", '_blank')} >
                                <LinkedIn /> LinkedIn

                                </a>
                            </li>

                    </ul>
                </div>
            </Fade>

            <span className='footer'>Made With ❤ by <a 
            onClick={()=>window.open("https://pradeep-marasini.herokuapp.com/",'_blank')}>Pradeep Marasini</a></span>

        </div>
    );
}
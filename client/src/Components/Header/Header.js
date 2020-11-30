import React, { useState } from 'react';
import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed}  from 'react-reveal';
import ParticlesBg from "particles-bg";


function Header() {
    
     //importing useProject context 
     //const [data, dispatch] = useProjectsContext();
      const [data,setState] = useState(
          { name :'Pradeep Marasini.',
            headerTagline: [//Line 1 For Header
                      'Hi 👋 You found me! I am Pradeep Marasini.',
                      //Line 2 For Header
                      'Front End Developer ',
                      //Line 3 For Header
                      'From Australia'
                  ]},);

      console.log(`inside header data is ${data}`)

   
        return (
        <div>
            
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
                        {/* <button>
                            <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a>
                        </button> */}

                        <button> 
                            <a href={process.env.PUBLIC_URL + "/pradeep_marasini_resume.pdf"} download >Download CV </a>
                        </button>
                    </Zoom>
                </p>     
            </Fade>
        </div>
        );
    
}

export default Header;
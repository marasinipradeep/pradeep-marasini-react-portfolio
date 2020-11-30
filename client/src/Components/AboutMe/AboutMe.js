import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';


//Import profile image
import portfolio from "../Images/pradeepPhoto.jpg"

export default function AboutMe() {

 

    //Setting state
    const [title, setTitle] = useState("ABOUT ME")
    const [name, setName] = useState("Pradeep Marasini")
    const [position, setPosition] = useState("Full Stack Web Developer")
    const [aboutMe, setAboutMe] = useState("Full Stack Web Developer with a background in electronics and communication engineering, utilising experience in banking / payment application, embedded system and agile methodology. Awarded as “Best IT Supporter” and is a strong communicator to work effectively with end-users and the team. Motivated to implement innovative technology on real world problems, to make life easier. Demonstrated excellent people-oriented service and know how to handle difficult requests while prioritising work.")

    

    return (<div className='about'>
    <div className='about-content'>
    <h1><Fade bottom cascade>About.</Fade></h1>
    <Fade bottom>
            <p>{aboutMe}</p>
    </Fade>
    </div>
    {/* {data.ShowAboutImage ? <img src={data.aboutImage} alt='about imge'></img> : null} */}
    

</div>  );
}
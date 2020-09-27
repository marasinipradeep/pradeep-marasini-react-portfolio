import React,{useState} from 'react'

import "./AboutMe.css"

export default function AboutMe() {

    const [aboutMe,setAboutMe] = useState("Full Stack Web Developer with a background in electronics and communication engineering, utilising experience in banking / payment application, embedded system and agile methodology. Awarded as “Best IT Supporter” and is a strong communicator to work effectively with end-users and the team. Motivated to implement innovative technology on real world problems, to make life easier. Demonstrated excellent people-oriented service and know how to handle difficult requests while prioritising work.")
    return (
        <section className="aboutus ">
        <div className="aboutus-center">
         <article className="service">
         <p>{aboutMe}</p>
         </article>
            

          
        </div>
    </section>
    )
}

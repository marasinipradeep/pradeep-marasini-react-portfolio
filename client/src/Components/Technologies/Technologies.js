import React, { useState } from 'react'

import { FaLaptop, FaLaptopCode, FaDatabase,FaExpand } from "react-icons/fa"


//import from services css
import './Technologies.css'

function Services() {

    const [frontEndTechnologies, setfrontEndTechnologies] = useState(
        [
            "HTML",
            "CSS",
            "Javascript",
            "jQuery",
            "C/C++",
            "Handlebars JS",
            "JSON",
            "JSX",
            "React JS",
            "Bootstrap",
            "Material UI",
            "Qt GUI",

        ])

    const [backEndTechnologies, setbackEndTechnologies] = useState(
        [
            "Node JS",
            "Express JS",
            "Libraries: Bcryptjs, JSON webtoken, Multer, Passport-local, socket.io"
        ])

    const [databaseTechnologies, setdatabaseTechnologies] = useState(
        [
            "MySQL",
            "MongoDB",
            "Sqllite",
            "PostgreSQL",
            "ORM: Sequelize",
            "ORM: Mongoose",
        ])

    const [testingTechnologies, settestingTechnologies] = useState(
        [
            "Jest",
            "Bitbucket",
            "Jira",
            "Github",
            "Gitlab",
            "Heroku"
        ])


    const [state, setState] = useState({
        technologies: [
            {
                icon: <FaLaptop />,
                title: "Front End",
                technology: frontEndTechnologies.map(frontend => {
                    return <ul>
                        <li>
                            {frontend}
                        </li>
                    </ul>
                })

            },
            {
                icon: <FaLaptopCode />,
                title: "Back End",
                technology: backEndTechnologies.map(backend => {
                    return <ul>
                        <li>
                            {backend}
                        </li>
                    </ul>
                })

            },
            {
                icon: <FaDatabase />,
                title: "Database",
                technology: databaseTechnologies.map(database => {
                    return <ul>
                        <li >
                            {database}
                        </li>
                    </ul>
                })

            },
            {
                icon: <FaExpand />,
                title: "Testing/Others",
                technology: testingTechnologies.map(testing => {
                    return <ul>
                        <li>
                            {testing}
                        </li>
                    </ul>
                })

            },
        ]

    })
    return (
        <section className="services">
            <h1>Technical Proficiencies</h1>
            <div className="services-center">
                {state.technologies.map((item, index) => {
                    return (
                        <article key={index} className="services">
                            <span></span>
                            <h2>{item.icon} {item.title}</h2>
                            <p>{item.technology}</p>
                        </article>
                    );

                })}
            </div>
        </section>



    );
}


export default Services

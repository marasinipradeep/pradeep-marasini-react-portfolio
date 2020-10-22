import React, { useState } from 'react'

import { FaLaptop, FaLaptopCode, FaDatabase,FaExpand } from "react-icons/fa"


//import from services css
import './Technologies.css'

function Services() {

    const [frontEndTechnologies, setfrontEndTechnologies] = useState(
        [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "JQUERY",
            "C/C++",
            "HANDLEBAR",
            "JSON",
            "JSX",
            "REACT",
            "BOOTSTRAP",
            "MATERIAL UI",
            "QT-GUI",

        ])

    const [backEndTechnologies, setbackEndTechnologies] = useState(
        [
            "NODEJS",
            "EXPRESS",
            "Libraries: bcryptjs, jsonwebtoken, multer, passport-local, socket.io"
        ])

    const [databaseTechnologies, setdatabaseTechnologies] = useState(
        [
            "MYSQL",
            "MONGODB",
            "SQLLITE",
            "POSTGRESQL",
            "ORM: SEQUELIZE",
            "ORM: MONGOOSE",
        ])

    const [testingTechnologies, settestingTechnologies] = useState(
        [
            "JEST",
            "BITBUCKET",
            "JIRA",
            "GITHUB",
            "GITLAB",
            "HEROKU"
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

// import React, { useState } from 'react';
// import Project from './techProject';
// import Fade from 'react-reveal/Fade';
// import Card from '../Cards/Cards';

// import { FaLaptop, FaLaptopCode, FaDatabase, FaExpand } from "react-icons/fa"


// //import from services css
// //import './Technologies.css'

// function Services() {

//     const [tech, setTech] = useState(
//         {

//             projects: [
//                 {
//                     id: 1,//DO NOT CHANGE THIS (Please)😅
//                     title: 'Go-Employee', //Project Title - Add Your Project Title Here
//                     service: 'This application helps to establish a connection between industry owner and job seeker. This is useful for business owner to find workers instantly in busy time. And benefits worker  because they can register, add information, and put themselves online so hiring person can see, view them and get connect.', // Add Your Service Type Here
//                     //Project Image - Add Your Project Image Here
//                     imageSrc: FaLaptop
//                 },
//                 {
//                     id: 2,
//                     title: 'React-Portfolio',
//                     service: 'This is a portfolio, which is useful to presents personal information, evidence of relevant skills and abilities.The website provides personal information in depth which includes personal introduction, list of proficient technologies, contact information and list of projects that have been accomplished.',
//                     imageSrc: FaLaptop
//                 },

//             ]
//         }
//     )

// const [frontEndTechnologies, setfrontEndTechnologies] = useState(
//     [
//         "HTML",
//         "CSS",
//         "Javascript",
//         "jQuery",
//         "C/C++",
//         "Handlebars JS",
//         "JSON",
//         "JSX",
//         "React JS",
//         "Bootstrap",
//         "Material UI",
//         "Qt GUI",

//     ])

// const [backEndTechnologies, setbackEndTechnologies] = useState(
//     [
//         "Node JS",
//         "Express JS",
//         "Libraries: Bcryptjs, JSON webtoken, Multer, Passport-local, socket.io"
//     ])

// const [databaseTechnologies, setdatabaseTechnologies] = useState(
//     [
//         "MySQL",
//         "MongoDB",
//         "Sqllite",
//         "PostgreSQL",
//         "ORM: Sequelize",
//         "ORM: Mongoose",
//     ])

// const [testingTechnologies, settestingTechnologies] = useState(
//     [
//         "Jest",
//         "Bitbucket",
//         "Jira",
//         "Github",
//         "Gitlab",
//         "Heroku"
//     ])


// const [state, setState] = useState({
//     technologies: [
//         {
//             icon: <FaLaptop />,
//             title: "Front End",
//             technology: frontEndTechnologies.map(frontend => {
//                 return <ul>
//                     <li>
//                         {frontend}
//                     </li>
//                 </ul>
//             })

//         },
//         {
//             icon: <FaLaptopCode />,
//             title: "Back End",
//             technology: backEndTechnologies.map(backend => {
//                 return <ul>
//                     <li>
//                         {backend}
//                     </li>
//                 </ul>
//             })

//         },
//         {
//             icon: <FaDatabase />,
//             title: "Database",
//             technology: databaseTechnologies.map(database => {
//                 return <ul>
//                     <li >
//                         {database}
//                     </li>
//                 </ul>
//             })

//         },
//         {
//             icon: <FaExpand />,
//             title: "Testing/Others",
//             technology: testingTechnologies.map(testing => {
//                 return <ul>
//                     <li>
//                         {testing}
//                     </li>
//                 </ul>
//             })

//         },
//     ]

// })
//     return (
//         <div>
//             <h1 className='heading'>
//                 <Fade bottom cascade>Work.</Fade></h1>
//             <div className='work-content'>
//                 {/* {tech.projects.map((project) => (

//                     <Project key={project.title}
//                         title={project.icon}
//                         service = {project.service}
//                     >

//                     </Project>
//                 ))} */}

//               <Card/>
//             </div>
//         </div>



//     );
// }



import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { FaLaptop, FaLaptopCode, FaDatabase, FaExpand } from "react-icons/fa"
import { red, blue } from '@material-ui/core/colors';
import { GitHub, LiveTv } from '@material-ui/icons';

import { useProjectsContext } from "../Utils/ProjectsContext"
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    root: {

        margin: 'auto',
        // backgroundColor: "#e2c779",
        color: "black",
        marginBottom: "50px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9

    },
    expand: {
        transform: 'rotate(0deg)',
        margin: 'auto',

        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',

    },
    avatar: {
        backgroundColor: red[500],
        fontSize: "35px"
    },
    cardHeader: {
        backgroundColor: "#faf0db"
    },
    cardFooter: {
        backgroundColor: "#f3e5ab"
    },
    description: {
        color: "#112222"
    }
}));



export default function Services() {

    //importing useProject context 
    const [state, setState] = useState(
        [
            {
                sys: {
                    id: "1"
                },
                fields: {
                    projectName: "Languages",
                    technoligiesUsed: [
                        "HTML",
                        "CSS",
                        "Javascript",
                        "C/C++"
                    ]
                }
            },

            {
                sys: {
                    id: "2"
                },
                fields: {
                    projectName: "Database",
                    technoligiesUsed: [
                        "MySQL",
                        "MongoDB",
                        "Sqllite",
                        "PostgreSQL"
                    ]
                }
            },



            {
                sys: {
                    id: "3"
                },
                fields: {
                    projectName: "CSS Libraries",
                    technoligiesUsed: [
                        "Bootstrap",
                        "Material UI",
                        "Foundation",
                        "Qt GUI",
                    ]
                }
            },

            {
                sys: {
                    id: "4"
                },
                fields: {
                    projectName: "Front End Libraries",
                    technoligiesUsed: [
                        "React JS",
                        "Next JS",
                        "Apollo",
                        "jQuery",
                        "Handlebars JS",
                        "Qt",
                    ]
                }
            },

            {
                sys: {
                    id: "4"
                },
                fields: {
                    projectName: "Back End Libraries",
                    technoligiesUsed: [
                        "Node JS",
                        "Express JS",
                        "Yoga Server",
                        "Prisma",
                        "Sequilize",
                        "Mongoose"
                    ]
                }
            },



            {
                sys: {
                    id: "6"
                },
                fields: {
                    projectName: "Test/Other",
                    technoligiesUsed: [
                        "Jest",
                        "Bitbucket",
                        "Jira",
                        "Github",
                        "Gitlab",
                        "Heroku"
                    ]
                }
            },

        ]
    )
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);



    return (

        <>

            {state.length ? (

                <div>
                    <h1>Proficient Technologies.</h1>
                    <Fade bottom>
                        <Grid item xs container spacing={3} >
                            {state.map((project, i) => (

                                <Grid item xs={6} md={4}>
                                    <Card className={classes.root}>
                                        <CardHeader
                                            avatar={<Avatar aria-label="recipe"
                                                className={classes.avatar}>{project.fields.projectName.charAt(0)}</Avatar>}
                                            action={<IconButton aria-label="settings"></IconButton>}
                                            titleTypographyProps={{ variant: "h4" }}
                                            title={project.fields.projectName}
                                        />



                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>

                                                {project.fields.technoligiesUsed.map(technoligiesUsed => (
                                                    <div>
                                                        <Typography paragraph variant="h6">
                                                            {technoligiesUsed}
                                                        </Typography>
                                                    </div>

                                                ))}

                                            </CardContent>

                                        </Collapse>
                                    </Card>
                                </Grid>

                            ))}

                        </Grid>
                    </Fade>

                </div>
            ) :
                (
                    <h3>No projects Found</h3>

                )}
        </>
    );
}

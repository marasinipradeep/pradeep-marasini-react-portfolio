
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { FaLaptop, FaLaptopCode, FaDatabase, FaExpand } from "react-icons/fa"
import { red } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    root: {

        margin: 'auto',
        marginBottom: "50px",
        width:"auto",
        height:"auto"
    },
   
   
    avatar: {
        backgroundColor: red[500],
        fontSize: "35px"
    },
    cardHeader: {
        backgroundColor: "#faf0db"
    },
   
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
                    icon: <FaLaptop />,
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
                    
                }
            },
            {
                sys: {
                    id: "6"
                },
                fields: {
                    projectName: "Test/Other",
                   
                }
            }
        ]
    )
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    return (
        <>
            {state.length ? (
                
                <div className="usedTechnologies">
                    <h1 className='proficientTechnologies'>Proficient Technologies.</h1>
                    <Fade bottom>
                        <Grid item xs container spacing={2} >
                            {state.map((project, i) => (

                                <Grid item xs={12} md={4} >
                                    <Card className={classes.root} className="technology">
                                        <CardHeader
                                            avatar={<Avatar aria-label="recipe"
                                                className={classes.avatar}>{project.fields.projectName.charAt(0)}</Avatar>}
                                            action={<IconButton aria-label="settings"></IconButton>}
                                            titleTypographyProps={{ variant: "h4" }}
                                            title={project.fields.projectName}
                                        />
                                        
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


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { FaLaptop, FaLaptopCode, FaDatabase, FaExpand } from "react-icons/fa"
import { red } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Flippy, { FrontSide, BackSide } from 'react-flippy';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto'
    },
    avatar: {
        backgroundColor: red[500],
        fontSize: "35px"
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
                    icon: <FaLaptop />,
                    technoligiesUsed: [
                        "HTML, CSS, Javascript"
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
                        "MySQL, MongoDB"
                    ]
                }
            },
            {
                sys: {
                    id: "3"
                },
                fields: {
                    projectName: "CSS",
                    technoligiesUsed: [
                        "Bootstrap, Material UI"
                    ]
                }
            },

            {
                sys: {
                    id: "4"
                },
                fields: {
                    projectName: "Front End",
                    technoligiesUsed: [
                        "React JS, Next JS, jQuery, Handlebars JS",
                    ]
                }
            },

            {
                sys: {
                    id: "4"
                },
                fields: {
                    projectName: "Back End",
                    technoligiesUsed: [
                        "Node JS, Express JS, Sequilize, Mongoose"
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
                        "Jest, Bitbucket, Github, Heroku"
                    ]
                }
            }
        ]
    )
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    return (

        <div className="usedTechnologies">
            {state.length ? (

                <div className="proficientTechnologies" >

                    <h1 >Trained With.</h1>

                    <Grid item xs container spacing={4} >

                        {state.map((project, i) => (
                            <Grid item xs={12} md={4} >
                                <Flippy
                                    flipOnHover={true} // default false
                                    flipOnClick={true} // default false
                                    flipDirection="horizontal"
                                >
                                    <Card className={classes.root} >
                                        <FrontSide style={{ backgroundColor: 'grey' }} >
                                            <CardHeader
                                                avatar={<Avatar aria-label="recipe"
                                                    className={classes.avatar}>{project.fields.projectName.charAt(0)}</Avatar>}
                                                action={<IconButton aria-label="settings"></IconButton>}
                                                titleTypographyProps={{ variant: "h4" }}
                                                title={project.fields.projectName} />
                                        </FrontSide>
                                    </Card>
                                    <BackSide style={{ backgroundColor: 'grey' }} >

                                        {project.fields.technoligiesUsed.map(technoligiesUsed => (
                                            <div >
                                                <CardContent >
                                                    <Typography className="proficientTechnologiesBackSIde">
                                                        {technoligiesUsed}
                                                    </Typography>
                                                </CardContent>
                                            </div>

                                        ))}
                                    </BackSide>
                                </Flippy>
                            </Grid>
                        ))}

                    </Grid>

                </div>


            ) :
                (

                    <h3>No projects Found</h3>

                )
            }
        </div>
    );
}

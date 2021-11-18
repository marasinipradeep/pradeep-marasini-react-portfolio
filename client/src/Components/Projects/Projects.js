import * as React from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


import { useProjectsContext } from "../Utils/ProjectsContext"
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        left: "2em",
        top: "5em",
        maxWidth: "90%",
        margin: 'auto',
        textAlign: "justify",
        fontSize: "1.2em",
        color: "white",
    },


}));
export default function Projects() {

    const [state, dispatch] = useProjectsContext();
    const className = useStyles();
    return (
        <div className="Projects">
            <div className={className.root}>

                <h1 style={{ color: '#ffffff', fontSize: '3.5em' }}>Recent Projects</h1>
                <Grid container spacing={5} >
                    {state.map((project, i) => (
                        project.fields.images.map(projectImages => (


                            <Grid item xs={12} md={4}>
                                < Card >
                                    <CardMedia
                                        component="img"
                                        alt={project.fields.projectName}
                                        height="140"
                                        image={projectImages.fields.file.url}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {project.fields.projectName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.fields.description}
                                        </Typography>
                                        <br />
                                        <Typography variant="h6" component="div"> Used Technologies</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.fields.technoligiesUsed}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => window.open((project.fields.liveLink), '_blank')}>Live URL</Button>
                                    </CardActions>
                                </Card>
                            </Grid>


                        )
                        )))}
                </Grid>
            </div>
        </div>
    )
}

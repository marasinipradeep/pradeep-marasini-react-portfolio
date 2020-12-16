import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { Paper, IconButton, Grid } from '@material-ui/core';
import { GitHub, LiveTv } from '@material-ui/icons';
import { useProjectsContext } from "../Utils/ProjectsContext";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        left: "2em",
        top: "5em",
        maxWidth: "90%",
        margin: 'auto',
        textAlign: "justify",
        fontSize: "1.2em",

    },
    media: {
        objectFit: "cover",
        width: "30%",
        height: "150px",
        border: "3px solid green",
        borderRadius:"50px",
    },

    icons: {
        marginLeft: "20px",
    },

    text: {
        margin: "1em"
    }

}));

export default function Example(props) {
    const [state, dispatch] = useProjectsContext();
    const classes = useStyles();

    return (
        <div className="Projects">

            <div className={classes.root}>

                <h1 style={{ color: '#ffffff',fontSize:'3.5em' }}>Recent Projects</h1>
                <Grid item xs container spacing={1} >

                    <Carousel className="caraousalSetting">
                        {
                            // items.map( (item, i) => <Item key={i} item={item} /> )
                            state.map((project, i) => (
                                project.fields.images.map(projectImages => (

                                    <Paper >
                                        <h1>Project: {project.fields.projectName}</h1>

                                        <div className={classes.icons}>

                                            <IconButton
                                                aria-label="Github"
                                                onClick={() => window.open((project.fields.githubLink), '_blank')}

                                            >
                                                <GitHub />
                                                <h6> Github link</h6>
                                            </IconButton>

                                            <IconButton
                                                aria-label="live url"
                                                onClick={() => window.open((project.fields.liveLink), '_blank')}
                                            >
                                                <LiveTv />
                                                <h6> Live URL</h6>
                                            </IconButton>
                                        </div>

                                        <div className={classes.text}>

                                            <p>{project.fields.description}</p>
                                            <img src={projectImages.fields.file.url} className={classes.media}></img>

                                            <h1>Used Technologies</h1>
                                            {console.log(`used tech `)}
                                            {project.fields.technoligiesUsed.map(techUsed => (
                                                <p>{techUsed}</p>

                                            ))}

                                        </div>






                                    </Paper>


                                ))))
                        }
                    </Carousel>
                </Grid>
            </div>
        </div>
    )
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { Paper, IconButton,Grid } from '@material-ui/core';
import { GitHub, LiveTv } from '@material-ui/icons';
import { useProjectsContext } from "../Utils/ProjectsContext";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "80%",
        margin: 'auto',
        color: "black",
        marginBottom: "50px",
        textAlign: "justify"
    },
    media: {
        // alignItems: "center",
        marginLeft: "100px",
        // marginRight:"100px",
        // width: "40%",
        // height: "auto",
         objectFit: "cover",
        margin: "autopx",
        width: "30%",
        height:"300px",
        border: "3px solid green",
        padding: "10px"
    },

    icons: {
        // alignItems: "center",
        marginLeft: "50px",
    }
}));

export default function Example(props) {
    const [state, dispatch] = useProjectsContext();
    const classes = useStyles();

    return (
        <div className="Projects">
        <div className={classes.root}>
            <h1 className='technology'>Recent Projects</h1>
            <Grid item xs container spacing={3} >
            <Carousel>
                {
                    // items.map( (item, i) => <Item key={i} item={item} /> )
                    state.map((project, i) => (
                        project.fields.images.map(projectImages => (
                            <Paper>
                                <h1>{project.fields.projectName}</h1>
                               
                                <div className={classes.icons}> 

                                <IconButton
                                    aria-label="Github"
                                    onClick={() => window.open((project.fields.githubLink), '_blank')}
                                >
                                    <GitHub />
                                </IconButton>

                                <IconButton
                                    aria-label="live url"
                                    onClick={() => window.open((project.fields.liveLink), '_blank')}
                                >
                                    <LiveTv />
                                </IconButton>
                                </div>
                               
                                <p>{project.fields.description}</p>
                                <img src={projectImages.fields.file.url} className={classes.media}></img>
                            </Paper>

                        ))))
                }
            </Carousel>
            </Grid>
        </div>
        </div>
    )
}


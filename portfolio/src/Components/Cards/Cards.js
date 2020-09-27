import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LinkedIn, GitHub, LiveTv } from '@material-ui/icons';

import { useProjectsContext } from "../Utils/ProjectsContext"
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginLeft:20
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
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
    }
}));



export default function Cards() {

    //importing useProject context 
    const [state, dispatch] = useProjectsContext();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {state.length ? (
                <div>

                    <Grid item xs container spacing={3} >
                        {state.map((project, i) => (

                            <Grid item xs={12} md={6} lg={4}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={<Avatar aria-label="recipe"
                                            className={classes.avatar}>{project.fields.projectName.charAt(0)}</Avatar>}
                                        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                                        titleTypographyProps={{variant:"h4"}}
                                        title={project.fields.projectName}
                                        subheaderTypographyProps={{variant:"subheader"}}
                                        subheader={project.fields.date}
                                    />

                                    {project.fields.images.map(projectImages => (
                                        <div>
                                            <CardMedia
                                                className={classes.media}
                                                image={projectImages.fields.file.url}
                                                title="Paella dish"
                                            />
                                        </div>
                                    ))}
                                    <CardContent>
                                        <Typography variant="h6" color="textPrimary" component="p">
                                            {project.fields.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="live url" onClick={() => window.open((project.fields.liveLink), '_blank')}><LiveTv /></IconButton>
                                        <IconButton aria-label="Github" onClick={() => window.open((project.fields.githubLink), '_blank')}><GitHub /></IconButton>

                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph>Technologies Used:</Typography>
                                            {project.fields.technoligiesUsed.map(technoligiesUsed => (
                                                <div>
                                                    <Typography paragraph>
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

                </div>
            ) :
                (
                    <h3>No projects Found</h3>

                )}
        </>
    );
}
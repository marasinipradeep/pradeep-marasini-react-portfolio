import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LinkedIn, GitHub, Facebook } from '@material-ui/icons';

import { useProjectsContext } from "../Utils/ProjectsContext"
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: "50px"

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
    },
    newCard: {
        marginTop: "20px"
    }
}));



export default function Cards() {

    const [state, dispatch] = useProjectsContext();
    console.log("inside Cards")
    console.log(state)

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {state.length ? (
                <div>
                    {/* <Card className={classes.root}> */}
                    <Grid item xs container spacing={3} >
                        {state.map((project, i) => (

                            <Grid item xs={12} md={6} lg={4}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={<Avatar aria-label="recipe"
                                            className={classes.avatar}>R</Avatar>}
                                        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                                        title={project.fields.projectName}
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
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {project.fields.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites" ><LinkedIn /></IconButton>
                                        <IconButton aria-label="share" onClick={() => window.open((project.fields.githubLink), '_blank')}><GitHub /></IconButton>

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
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

import { useProjectsContext } from "../Utils/ProjectsContext"

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
            <h1>all Projects</h1>
            {state.length ? (
                <Card className={classes.root}>
                    {state.map((project,i) => (
                        
                        <div>
                          
                            
      <CardHeader
        avatar={<Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>}
        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title={project.fields.projectName}
        subheader={project.fields.date}
      />

      <CardMedia
        className={classes.media}
        image={project.fields.images[i].fields.file.url}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {project.fields.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
          {project.fields.technoligiesUsed.map(technoligiesUsed=>(
              <div>
          <Typography paragraph>
           {technoligiesUsed}
          </Typography>
          </div>
          
        ))}
        
          
          
        </CardContent>
        
      </Collapse>

      </div>
                    ))} 
                </Card>
            ) : 
         
            (
                    <h3>No projects Found</h3>

                )}
        </>
    );
}
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Typography, CardActionArea, Modal, Grid} from '@material-ui/core';
import '../assets/photoEntry.css'


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        left: `50%`,
        top: `25%`,
        width:`75%`,
        transform: `translateX(-50%)`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    card:{
        borderRadius:20,
        width: `15vw`,
        height: `15vw`,
        marginBottom:`3%`
    },
    cardcontent:{
        height:10,
    }

}));

const PhotoEntry=({post})=> {   
    const classes = useStyles();
 
    //console.log(post.tags)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
        <Card className={classes.card} >
            
            <CardActionArea  onClick={handleOpen}>
            <CardMedia style={{height: 0,
                paddingTop: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken'}} 
                image={post.image} 
                
                title={post.dishName}/>
                
            </CardActionArea>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div  className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography>{post.dishName}</Typography>
                            <Typography>{post.description}</Typography>
                            <Typography>{post.tags}</Typography>
                            <Typography>Fillingness: {post.fillingness}</Typography>
                            <Typography>Price: {post.price}</Typography>  
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{post.dishName}</Typography>
                            <Typography>{post.description}</Typography>
                            <Typography>{post.tags}</Typography>
                            <Typography>Fillingness: {post.fillingness}</Typography>
                            <Typography>Price: {post.price}</Typography>
                        </Grid> 
                    </Grid>
                </div>
            </Modal>
        </Card>
        <h7 className="roboto" >{post.dishName}-{post.restName}</h7>
        </div>
    );
}

export default PhotoEntry;
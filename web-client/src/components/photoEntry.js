import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, Typography, CardActionArea, Modal, Grid} from '@material-ui/core';
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
        top: `15%`,
        width:`75%`,
        height:'60vh',
        transform: `translateX(-50%)`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
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
                    <Grid container>
                        <Grid item xs={6}>
                          <img style={{width:`60vh`,height:`60vh`}}src={post.image} alt="foodImage" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="roboto" style={{color:'black', fontSize:`50px`, fontWeight:900, padding:'4%', marginTop:'8%'}}>{post.dishName}</Typography>
                            <Typography className="roboto" style={{color:'black', fontSize:`30px`, fontWeight:600, padding:'4%'}}>{post.description}</Typography>
                            <Typography className="roboto" style={{color:'black', fontSize:`20px`, fontWeight:600, paddingLeft:'4%'}}>{post.tags}</Typography>
                            <Typography className="roboto" style={{color:'black', fontSize:`20px`, fontWeight:300, paddingLeft:'4%'}}>Fillingness: {post.fillingness}</Typography>
                            <Typography className="roboto" style={{color:'black', fontSize:`20px`, fontWeight:300, paddingLeft:'4%'}}>Price: ${post.price}</Typography>
                        </Grid> 
                    </Grid>
                </div>
            </Modal>
        </Card>
        <h2 className="roboto" style={{fontSize:'15px'}}>{post.dishName}-{post.restName}</h2>
        </div>
    );
}

export default PhotoEntry;
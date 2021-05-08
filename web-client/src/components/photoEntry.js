import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';

const photoEntry=({post})=> {
    console.log(post);
    return (
        <Card>
            <CardContent>
                <Typography>{post.restName}</Typography>
            </CardContent>
            <CardMedia style={{height: 0,
                paddingTop: '56.25%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken',}} 
                image={post.image} 
                title={post.dishName}/>
            <CardContent>
                <Typography>{post.dishName}</Typography>
                <Typography>{post.description}</Typography>
                
                <Typography>Fillingness: {post.fillingness}</Typography>
                <Typography>Price: {post.price}</Typography>
            </CardContent>
        </Card>
    );
}

export default photoEntry;
import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import {TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  multilineColor:{
      color:'black',
      backgroundColor:'white'
  },
  textField:{
    color: 'white',
    backgroundColor:'white',
    border: '1px solid white',
    margin:`10px`
  },
}));
//import api from '../api/api'  
const AddEntry=(props)=> {
  const classes = useStyles();
    const [postData,setPostData]= useState({
        itemId: '',
        restName:'',
        dishName:'',
        description:'',
        image:'',
        link:'',
        price:0,
        fillingness:0
    });

    const createMerchant=(e)=>{
        e.preventDefault();
        const itemId=uuidv4();
        const newRestName = postData.restName;
        const newDishName = postData.dishName;
        const newDescription = postData.description;
        const newImage = postData.image;
        const newLink = postData.link;
        const newPrice = postData.price;
        const newFillining = postData.fillingness;
        console.log(newPrice);
        fetch('http://localhost:3001/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({itemId,restName: newRestName, dishName: newDishName, description: newDescription, image: newImage, link: newLink, price: newPrice, fillingness: newFillining}),
        })
          .then(response => {
              console.log("success");
            return response.text();
          })

      }

    return (
        <form autoComplete="off" noValidate onSubmit={createMerchant}>
            <TextField className={classes.textField} InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }}name="restName" variant="outlined" label="restaurant name?" color="primary" fullWidth value={postData.restName} onChange={(e)=> setPostData({ ...postData, restName: e.target.value })} />
            <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }}name="dishName" variant="outlined" label="dish name?" className={classes.textField} fullWidth value={postData.dishName} onChange={(e)=> setPostData({ ...postData, dishName: e.target.value })} />
            <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }}name="description" variant="outlined" label="short description" className={classes.textField} rows={3} multiline fullWidth value={postData.description} onChange={(e)=> setPostData({ ...postData, description: e.target.value })} />
            <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }}name="image" variant="outlined" label="image link" fullWidth className={classes.textField} value={postData.image} onChange={(e)=> setPostData({ ...postData, image: e.target.value })} />
            <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }}name="link" variant="outlined" label="online link?" fullWidth className={classes.textField} value={postData.link} onChange={(e)=> setPostData({ ...postData, link: e.target.value })} />
            <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }} name="price" variant="outlined" label="price in $?" fullWidth className={classes.textField} value={postData.price} onChange={(e)=> setPostData({ ...postData, price: e.target.value })} />
            <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }}name="fillingness" variant="outlined" label="fillingness?" className={classes.textField} fullWidth value={postData.fillingness} onChange={(e)=> setPostData({ ...postData, fillingness: e.target.value })} />
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

        </form>
    );
}

export default AddEntry;
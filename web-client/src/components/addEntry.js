import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import axios from 'axios'

//import api from '../api/api'  
const AddEntry=(props)=> {
    const [postData,setPostData]= useState({
        itemId:99,
        restName:'richs',
        dishName:'test',
        description:'test',
        image:'test',
        link:'test',
        price:1,
        fillingness:1
    });
    const createPost =(newPost) => axios.post("http://localhost:3001/create",newPost.itemId,newPost.restName,newPost.dishName,newPost.description,newPost.image,newPost.link,newPost.price,newPost.fillingness);
    const handleSubmit =(e)=>{
        e.preventDefault();
        createPost(postData);
        
    }
    return (
        <Button onClick={(e)=>createPost(postData)}>Submit</Button>
    );
}

export default AddEntry;
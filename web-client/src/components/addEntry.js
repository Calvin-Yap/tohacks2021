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
    const createPost =()=> axios({
        method: 'post',
        url: 'http://localhost:3001/create',
        data: {
            itemId:99,
            restName:'richs',
            dishName:'test',
            description:'test',
            image:'test',
            link:'test',
            price:1,
            fillingness:1
        }
      })
      .then((response) => {
          console.log(response);
      }, (error) => { console.log(error);
    });

    function createMerchant() {
        const itemId=99
        const restName='richs'
        const dishName='test'
        const description='test'
        const image='test'
        const link='test'
        const price=1
        const fillingness=1

        fetch('http://localhost:3001/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({itemId, restName, dishName, description, image, link, price, fillingness}),
        })
          .then(response => {
            return response.text();
          })

      }

    const handleSubmit =(e)=>{
        e.preventDefault();
        createPost(postData);
        
    }
    return (
        <Button onClick={createMerchant}>Submit</Button>
    );
}

export default AddEntry;
import axios from 'axios'

export const fetchPosts = ()=> axios.get("http://localhost:3001/");
export const createPost =(newPost) => axios.post("http://localhost:3001/create",itemId,restName,dishName,description,image,link,price,fillingness);
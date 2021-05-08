import React, {useState, useEffect} from 'react';
import {Grid, } from '@material-ui/core'
import PhotoEntry from './photoEntry'
import TagsBar from './tagsBar'
const testDB = [{
    id:'1',
    restName:'Richards',
    dishName:'Katsu',
    description:'it was very tasty',
    image:'https://picsum.photos/200',
    tags:['spicy'],
    link:'www.google.ca',
    price:'$$$',
    fillingness:'100',

},
{
    id:'2',
    restName:'Richards',
    dishName:'Katsu',
    description:'it was very tasty',
    image:'https://picsum.photos/200',
    tags:['not spicy','cool'],
    link:'www.google.ca',
    price:'$$$',
    fillingness:'100',

}]
const MainPage=(props)=> {
    const [posts, setPosts] = useState([]);

    const fetchPosts= ()=>{
        setPosts(testDB);
    }
    useEffect(() => {
        fetchPosts();
      },[]);

    return (
        
        <Grid container spacing={3}>
            <TagsBar/>
               {
                   posts.map((post)=>(
                       <Grid key={post.id} item xs={4} sm={4}>
                         <PhotoEntry post={post}/>
                        </Grid>
                   ))
               }
               
        </Grid>
    );
}

export default MainPage;
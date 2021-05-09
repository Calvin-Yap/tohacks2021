import React, {useState, useEffect} from 'react';
import {Grid,} from '@material-ui/core'
import PhotoEntry from './photoEntry'
import '../assets/mainPage.css'
import {testDB} from './testdb'
import NavBar from './navBar'
const MainPage=(props)=> {
    const [posts, setPosts] = useState([]);
    
    const fetchPosts =()=>{
        setPosts(testDB);
    }


      useEffect(() => {
          fetchPosts();
      },[]);
   

    return (
        <>
        <NavBar/>
        <div style={{backgroundColor:'#242424', height:`100vh`,paddingTop:'2%', paddingLeft:'6.5%'}}>
        <Grid justify="center" className="background" container>
               {
                   posts.map((post)=>(
                       <Grid key={post.id} item xs={3} sm={3} >
                         <PhotoEntry post={post}/>
                        </Grid>
                   ))
               }
               
        </Grid>

        </div>
        </>
    
    );
}

export default MainPage;
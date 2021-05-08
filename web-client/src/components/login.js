import React, {useState} from 'react';
import {Grid, Typography, Button} from '@material-ui/core'

const Login=()=> {
    const [option, setOption] = useState=('');
    const handleClick = (value)=>{
        setOption(value);
        if(option === "True"){

        }else{
            
        }
    }
    return (
        <Grid container
        spacing={3}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
            
            <Grid item xs={6}>
               <Typography>ezeats</Typography>
            </Grid>
                <Grid item xs={6}>
                    <Button title="Sign Up" onClick={(e)=>handleClick('True')}> Sign Up </Button>    
                </Grid>
                <Grid item xs={6}>
                <Button title="Login">Login</Button>
                </Grid>
               
        </Grid>
    );
}

export default Login;
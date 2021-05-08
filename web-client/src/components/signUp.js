import React from 'react';
import {TextField, makeStyles, Grid, Container} from '@material-ui/core/';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const signUp=(props) => {
    
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
                <Grid item xs={12} alignItems="center"> SIGN UP 
                </Grid>
                    <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">
                        <form noValidate autoComplete="off">
                            <Grid item xs={12}>
                                <TextField required id="standard-required" label="Required" defaultValue="First Name" />
                                <TextField required id="standard-required" label="Required" defaultValue="Last Name" />
                            </Grid>
                            <Grid item >
                                <TextField required id="standard-required" label="Required" defaultValue="Email" />
                                <TextField required id="standard-required" label="Required" defaultValue="Phone Number" />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField required id="standard-required" label="Required" defaultValue="Username" />
                                <TextField required id="standard-required" label="Required" defaultValue="Password"/>
                            </Grid>
                        </form>
                    </Grid>
            </Grid>
    );
}

export default signUp;
import React from 'react';
import {Grid, Button, ButtonGroup } from '@material-ui/core'

const tagsBar=(props)=> {
    return (
        <Grid container >
            <Grid item xs={12}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
}

export default tagsBar;
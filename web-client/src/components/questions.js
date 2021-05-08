import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {Typography, FormGroup, FormControlLabel, Checkbox, Slider, Grid, TextField, Button } from '@material-ui/core'

const marks = [
  {
    value: 0,
    label: "Bored"
  },
  {
    value: 25,
    label: "Snack"
  },
  {
    value: 50,
    label: "Eh"
  },
  {
    value: 75,
    label: "Hungry"
  },
  {
    value: 100,
    label: "Famished"
  }
];

function valuetext(value) {
  return `${value}$`;
}

const Questions = () => {
  const [value, setValue] = useState([20, 37]);
   

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [tag, setTag] = useState([]);
  const handleClick = (newTag) => {
    setTag((prev) => {
      console.log(tag);
      return [...prev, newTag];
      
    });
  };

  return (
    <Grid container 
    justify="center"
    > 
      <Grid item xs={8}>
        <Typography id="discrete-slider-custom" gutterBottom>
          How Hungry are you
        </Typography>
        <Slider
          defaultValue={50}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={25}
          marks={marks}
        />
      </Grid>

      <Grid item xs={8}>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox name="checkedA" onClick={(e)=>handleClick('Savory')} />}
            label="Savory"
          />

          <FormControlLabel
            control={<Checkbox name="checkedA" onClick={(e)=>handleClick('Sweet')}/>}
            label="Sweet"
          />

          <FormControlLabel
            control={<Checkbox name="checkedA" onClick={(e)=>handleClick('Spicy')}/>}
            label="Spicy"
          />

          <FormControlLabel
            control={<Checkbox name="checkedA" onClick={(e)=>handleClick('Refreshing')}/>}
            label="Refreshing"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" onClick={(e)=>handleClick('Anything')}/>}
            label="Anything"
          />
        </FormGroup>
      </Grid>

      <Grid item xs={8}>
        <Typography id="range-slider" gutterBottom>
          Budget
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography id="range-slider" gutterBottom>
          Time Constraint
        </Typography>
        <TextField placeholder="Hours" label="Hours"/>
        <TextField placeholder="Minutes" label="Minutes"/>

      </Grid>
      <Grid item xs={8}>
        <Button>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default Questions;

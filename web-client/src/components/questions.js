import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {Typography, FormGroup, FormControlLabel, Checkbox, Slider, Grid, TextField, Button, Paper } from '@material-ui/core'
import styles from '../assets/questions.css';

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
  const qstyle = {
    width: '363px',
    height: '321px',
    left: '10px',
    top: '70px',
    position:'absolute',
    fontFamily: 'Roboto',
    fontSize: '50px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '70px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#4AA483',
    paddingLeft:'15%',
  };
  const stext = {
    width: '363px',
    height: '70px',
    top: '400px',
    left:'10px',
    position:'absolute',
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#999999',
    paddingLeft:'15%',
  };

  const qs = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',

    position: 'absolute',
    width: '765px',
    height: '745px',
    right: '20px',
    top: '10px',
  }

  const qsbox = {
    display: 'flex',
    flexdirection: 'column',
    alignitems: 'flex-start',
    padding: '30px',
    border: '2px solid #303, 100%',

    position: 'static',
    width: '550px',
    height: '20px',
    left: '30px',
    top: '527px',

    
    color: '#303030',

    boxshadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    background: '#4AA483',
    borderradius: '30px',

    flex: 'none',
    order: '2',
    flexgrow: '0',
    margin: '32px 0px',

    fontfamily: 'Roboto',
    fontsize: '28px',
    fontstyle: 'normal',
    fontweight: '500',
    lineheight: '33px',
    letterspacing: '0em',
    textAlign: 'left',

  }
  return (
    <div style={{backgroundColor:'#303030', width:'100%', height:'100vh', padding:'100px'}}> 
<div style={{backgroundColor:'#303030'}}>
      <div style={qstyle}>
        <p>craving something, but not quite sure what?</p>
      </div>
      <div style={stext}>
        <p>let us help! take this mini quiz all questions are optional)</p>
      </div>
          <div style={qs}>
          <div style={qsbox}>
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
          </div>
          
          <div style={qsbox}>
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
            </div>

            <div style={qsbox}>
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
            </div>
            <div style={qsbox}>
              <Typography id="range-slider" gutterBottom>
                Time Constraint
              </Typography>
              <TextField placeholder="Hours" label="Hours"/>
              <TextField placeholder="Minutes" label="Minutes"/>
            </div>
          </div>
            <button style={{backgroundColor:'#E54D59', border:'transparent', position:'absolute', top:'85vh', width:'45%', right:'23vh', padding:'1%', borderRadius:'30px'}} >tell me what to eat</button>
    </div>
    </div>
    
  );




  
};


export default Questions;

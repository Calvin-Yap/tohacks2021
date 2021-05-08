import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(1)
  }
}));

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

  const handleChange = (event, newValue) => {
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
    <div>
      <div>
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

      <div>
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

      <div>
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
    </div>
  );
};

export default Questions;

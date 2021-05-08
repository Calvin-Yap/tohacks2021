import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const [option, setOption] = useState("")
  const handleClick = (value)=>{
      setOption(value)
if (value==="true"){console.log ("true")}
else {console.log ("false")}
  }
  return (
    <div className={classes.root}>
        <p>What should I eat?</p>
      <Button variant="contained" onClick={(e)=>handleClick('true')} value="true">Take Mini Quiz
      </Button>
      <Button variant="contained" onClick={(e)=>handleClick('false')} value="false">100% Random
      </Button>
      
    </div>
  );
}

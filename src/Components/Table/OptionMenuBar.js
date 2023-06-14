import React from "react";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
const useStyles = makeStyles({
 
icons:{
  borderRadius: "2rem !important",
   backgroundColor: "#050e25 !important"
},
button:{
  color:'#ffffff !important'
}
});


export default function OptionPaper(props) {
  const classes = useStyles(); 
 
  const { OptionMenu } = props;
 
 
  return (
    <div>
      <Paper style={{  }} className={classes.icons} >
      {OptionMenu.map((name) => (
    name.showTooltip ? (
      <Tooltip title={name.toolTipName} arrow>
        <Button className={classes.button} onClick={name.onClick}>
          {name.icon}
        </Button>
      </Tooltip>
    ) : (
      <Button   className={classes.button} onClick={name.onClick}>
        {name.icon}
      </Button>
    )
  ))}
      </Paper>
    </div>
  );
}

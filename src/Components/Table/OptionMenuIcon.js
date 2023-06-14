import React from "react";
import OptionPaper from "./OptionMenuBar.js";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";


const useStyles = makeStyles({
  iconContainer: {
   display:'inline-block !important'
  }
});


   


export const MenuBar1=(props) => {
    const {accordionOpen,setAccordionOpen}=props
    const classes = useStyles(); 
   
    let AccordionOpen = accordionOpen;
    
    const handleChange = () => {
        
        let accordion =!accordionOpen
        setAccordionOpen(accordion)   
        };


    const JoblistMenu = [
        { name: "UnfoldMoreIcon",icon:AccordionOpen?<UnfoldLessIcon/>:<UnfoldMoreIcon/>, onClick: handleChange ,showTooltip:true,toolTipName:'Collapse' },
        { name: "ControlPointDuplicateIcon",icon:<ControlPointDuplicateIcon/> ,showTooltip:true,toolTipName:'Duplicate'}
        
      ];



    return (
    <Grid className={classes.iconContainer}  > 
    <OptionPaper OptionMenu={JoblistMenu} AccordionOpen={AccordionOpen}   />
    </Grid>
  
    
    )
    
    }
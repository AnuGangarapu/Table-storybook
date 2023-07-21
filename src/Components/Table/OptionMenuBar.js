import React from "react";
import OptionPaper from "./OptionMenuIcon";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import DeleteIcon from '@mui/icons-material/Delete';



export const MenuBar1 = (props) => {
  const { accordionOpen, setAccordionOpen } = props;


  let AccordionOpen = accordionOpen;

  const handleChange = () => {
    let accordion = !accordionOpen;
    setAccordionOpen(accordion);
  };

  const JoblistMenu = [
    {
      name: "UnfoldMoreIcon",
      icon: AccordionOpen ? <UnfoldLessIcon style={{height:"16px",width:"16px",color:'#CDCFD3'}}/> : <UnfoldMoreIcon style={{height:"16px",width:"16px",color:'#CDCFD3'}}/>,
      onClick: handleChange,
      showTooltip: true,
      toolTipName: "Collapse",
    },
    {
      name: "Delete",
      icon: <DeleteIcon style={{height:"16px",width:"16px",color:'#CDCFD3'}}/>,
      showTooltip: true,
      toolTipName: "Delete",
    },
  ];

  return (
    
      <OptionPaper OptionMenu={JoblistMenu} AccordionOpen={AccordionOpen} />
    
  );
};

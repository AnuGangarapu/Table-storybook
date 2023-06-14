import React from "react";
import AutoComplete from "./AutoComplete"


export default {
    title:'Form/AutoComplete',
   
   
    
}   

  
  
const countries = [
    {value:'123',label:'123'}, {value:'234',label:'234'}, {value:'129',label:'129'}, {value:'12',label:'12'},
  ];




const Template=args=><AutoComplete {...args}/>

export const BothIcons=Template.bind({})
BothIcons.args={
    option:countries,
    add:true,
    variant:"standard",
    label:'City', 
    add:true,
    value:'567780987654',
    classProperties:{margin:'25px',width:'50%'},
    dropDownStyle:{width:"95%"},
    variant:"outlined",
    iconPosition:'startAdornment', position:'start',icon:true,showStartAdornment:true,showEndAdornment:true,  variant:"standard",
    
}
export const RightIcon =Template.bind({})
RightIcon.args={
    option:countries,
        add:true,

        placeholder:"Select a Country", 
        classProperties:{margin:'25px',width:'25%'},
        dropDownStyle:{width:"125%"}, 
        variant:"standard",
        iconPosition:'endAdornment', 
        position:'end',
        icon:true,
        showEndAdornment:true
    
}

export const LeftIcon=Template.bind({})
LeftIcon.args={
    option:countries,
    variant:"standard",
        placeholder:"Select a Country",
        classProperties:{margin:'25px',width:'25%'},
        iconPosition:'startAdornment', 
        position:'start',
        icon:true,
        showStartAdornment:true,
}

export const NoIcon=Template.bind({})
NoIcon.args={
    option:countries,classProperties:{margin:'25px',width:'25%'},   variant:"standard",
    placeholder:"Select a Country",
}
export const ErrorIcon=Template.bind({})
ErrorIcon.args={
    option:countries,
        classProperties:{margin:'25px',width:'25%'},
        mandatory:true,
        variant:"standard",
        placeholder:"Select a Country",
}


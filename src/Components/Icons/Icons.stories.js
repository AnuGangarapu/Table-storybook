import React from "react";
import Icon from "./Icon"


export default {
    title:'Form/Icon',
   
   
    
}   

  
  




const Template=args=><Icon {...args}/>

export const SelectedIcon=Template.bind({})
SelectedIcon.args={
    iconName:'FilterListIcon',
    clicked:'true'
    
}
export const DisabledIcon=Template.bind({})
DisabledIcon.args={
    iconName:'FilterListIcon',
    disabled:'true'
    
}

export const NormalIcon=Template.bind({})
NormalIcon.args={
    iconName:'FilterListIcon',
}


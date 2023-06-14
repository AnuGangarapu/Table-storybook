import React from 'react';
import Icons from './Icons';

// style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',height:'50vh'}}
const Icon = (props) => {
  const {iconName,disabled,clicked}=props
  console.log(iconName,disabled,clicked)
  return (
    <div>
     
      
<Icons iconName={iconName} clicked={clicked}  disabled={disabled}/>
      
    </div>
  );
};

export default Icon;
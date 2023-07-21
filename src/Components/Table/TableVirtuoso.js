import ListTable from './Table';
import React from 'react';
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";




function TableVirtuoso(props) {
  
    const [fullAccordianOpen, setAccordion ] = React.useState(false)
    const [listData,setData]=React.useState(props.listData)
   React.useEffect(()=>{
    setData(props.listData)

   },[props.listData])
   
  const handleChange = ()=> {
    setAccordion(!fullAccordianOpen)
    }

    const setListData = (index)=> {
      props.setListDataItem(index)
      // let newItem={}
      // const presentRows = [...listData];
      // presentRows.splice(index + 1, 0, newItem);
      // setData(presentRows);
     
      }
   
    return (
      <>
    {fullAccordianOpen===true?<UnfoldLessIcon   onClick={()=>handleChange()}/>:<UnfoldMoreIcon   onClick={()=>handleChange()}/>}
    
      <ListTable columns={props.columns}   listData={listData} accordion={fullAccordianOpen} checkbox={props.checkbox} hover={props.hover}  setListData={setListData}/>
      
      </>
   
    );
  }
  
  export default TableVirtuoso;
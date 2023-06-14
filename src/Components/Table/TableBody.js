
import React, { useEffect, useState ,useRef} from 'react';
import { 
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Tooltip,
  Button,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { MenuBar1 } from './OptionMenuIcon.js';

const useStyles = makeStyles(() => ({
  tableRowContainer:{
    boxShadow:'0px 0px 13px #EEEEF8',
    borderRadius:'8px',
    marginRight:'10px',
    marginBottom:"30px",
    '& .MuiPaper-root':{
       boxShadow: '0px 0px 13px #red !important',
      
  },

  },


    accordion:{
        "&:hover": {
          backgroundColor:'#eeeeee'
        },
    },
        accordionDetail:{
          marginTop:"-2rem",
        display:'flex !important',
         flexDirection:'column'

        },
        TableRow:{
         
          width:'100%',
          display:'flex !important',
      
        },
        TableRow2:{
        
            display:'flex !important',
       
        },
       
        tableBodyCell: {

        overflow:"hidden",
        textOverflow:"ellipsis",
        fontSize: '14px !important',
        color:'#050E25 !important',
        fontFamily:'Inter !important',
        borderBottom: 'none !important',
        position:'relative'
        
      },
      sNoContainer:{
        display: 'flex', 
        alignItems: 'center'

      },
      number:{
        maxWidth: '55px',
        overflow:"hidden",
        textOverflow:"ellipsis",
        fontFamily:'Inter !important'
      },
          
          menuBar:{
            position:'relative',
            left:"50%"
          },
          iconsboxClosed:{
      
            height:"1.7rem",
            borderRadius:"1rem",
            position:"absolute",
            left:"45%",
           // top:"77%",
           marginTop:'-22px',
            width:'50%'
          },
          iconsboxOpened:{
             
              height:"1.7rem",
              borderRadius:"1rem",
              position:"absolute",
              left:"45%",
              marginTop:'-22px',
              //top:"91%" ,
              width:'45%'
              },
              landIcon:{
                 height:'19px !important',
                color:"#FCD277"
               
                
              },
              airIcon:{
                height:'19px !important',
                color:"#99A7F1"
              
               
             },
             shipIcon:{
              height:'19px !important',
              color:'#65D4BA'
            
             
           },
           link:{
            cursor: "pointer" 

           },
         
          TableCellInfo:{
            overflow:"hidden",
            textOverflow:"ellipsis",
            display: '-webkit-box', 
            '-webkit-line-clamp': 2, 
            '-webkit-box-orient': 'vertical',
            wordBreak:"break-word",
            fontFamily:'Inter !important',
            fontSize:"14px !important"
          

          },
        
    }));


export default function Joblisttablebody(props) {
    const classes = useStyles(); 
    const [ accordionOpen , setAccordionOpen ] = React.useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const {data , columns , index  } = props
  
   
   React.useEffect(() => {
           
            if(props.accordionFullOpen===true){
                setAccordionOpen(true)
                
            }
            else if(props.accordionFullOpen===false){
                setAccordionOpen(false)
                
            }
    }, [props.accordionFullOpen])
   
 


  return (

   
    <div className={classes.tableRowContainer} onMouseLeave={() => setIsHovered(false)}> 
   
        <Accordion  expanded = {accordionOpen} className={classes.accordion}  >

        <AccordionSummary >

         <TableRow  className={classes.TableRow} key={index}   onMouseEnter={() => setIsHovered(true)} 
>  
       
        {columns[0].row.map((column) => {
        

  return (
    <TableCell
      style={{
        width: column.minWidth,
       
        flexGrow:column.flexGrow,
       
        left:column.left
        
      }}
      key={column.id}
      className={classes.tableBodyCell}
    >
     
      {column.id === "srNo" &&<div className={classes.sNoContainer}>
      <Typography  className={classes.number}>{`${index+1}. \u00A0`}</Typography>
      {data?.mot ? (
  data.mot === 'Land' || data.mot === 'L-Land' ? (
    <LocalShippingIcon className={classes.landIcon} />
  ) : data.mot === 'Air' ? (
    <LocalAirportIcon className={classes.airIcon} />
  ) : (
    <DirectionsBoatIcon className={classes.shipIcon}/>
  )
) : null}

        </div>}
      
      
      
      {column.id === "jobNo" ? (<Link   className={`${classes.link} ${classes.TableCellInfo}`}>{data[column.id]}</Link>) : column.id !== "srNo" ?<Typography   className={classes.TableCellInfo}> {data[column.id]} </Typography> :'' }
    </TableCell>
  );
})}
        </TableRow>
        </AccordionSummary>
        {columns.map((row,i) => (
        <AccordionDetails  className={classes.accordionDetail}>
        

<TableRow className={classes.TableRow2} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
  {i > 0
    ? row.row.map((column) => {
      
        return (
          <TableCell
          style={{width: column.minWidth, flexGrow:column.flexGrow,left:column.left}}
          key={column.id}
          className={classes.tableBodyCell}
          >
          <Typography className={classes.TableCellInfo}> {data[column.id]} </Typography> 
          </TableCell>
        );
      })
    : null}
</TableRow>

       





        </AccordionDetails>   ))} 




</Accordion> 
{isHovered && (
        <span className={accordionOpen === false ? classes.iconsboxClosed : classes.iconsboxOpened} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
          <MenuBar1  accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen} />
        </span>
      )}




    </div> 
    
  
    
    
    
  )
}
 
import { Accordion,AccordionDetails,AccordionSummary } from '@mui/material';
import { TableVirtuoso } from 'react-virtuoso'
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Joblisttablebody from './TableBody';
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import FilterListIcon from '@mui/icons-material/FilterList';
import { makeStyles } from '@mui/styles';
import './Table.css'




const useStyles = makeStyles(() => ({ 
  tableContainer:{
        padding:"10px 10px",
        background:'#F6F9FF !important'
    },
    table:{
       padding:"10px 10px",
       borderRadius:"10px",
       paddingRight:"20px",
       border:"2px solid #E7E7E7",
       background:"#FDFEFF  !important"
    },
    virtualizedTable:{
              height: "758px !important" ,
              marginLeft:"0.8rem",
              boxShadow:'none !important',
              background:'#FDFEFF  !important',
              borderRadius:"12px !important",
              '& .MuiTableHead-root':{
                  zIndex:"2 !important"
              },
            '& .MuiPaper-root':{
              boxShadow:'none',
              },
            '&::-webkit-scrollbar': {
                width: '5px',
                height: "5px",
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: "#CDCFD3",
              borderRadius: '4px',
            },
          
     },
     tableHeadContainer:{
          display:'flex !important',
          marginRight:'10px',
          marginBottom:'10px'

     },
     tableHead:{
        width: '100%',
     },
     
     accordianSummary:{
      width:'100%',
      marginBottom:"-1rem !important",
     
     },
     accordionDetails:{
      marginTop:"-2.5rem",
    },
    accordionDetailsContainer:{

      marginTop:"1rem",

      },
     tableRow:{
         display:'flex !important',
         width:'100%',
     },
     tableRow2:{
        width:'100%',
        display:'flex !important',
    },
      tableCell:{
        color: '#626776 !important', 
        fontSize: '14px !important', 
        fontFamily:'Inter !important',
        fontStyle:'normal !important',
        fontWeight: '400 !important', 
        borderBottom:"none !important",
        fontFamily:"Mulish !important",
        position:'relative',

      },
      tableCellContainer:{
        display: 'flex', 
        alignItems: 'start'
      },
      tableCellName:{
        lineHeight:"1rem"
      },
      filter:{
        marginTop: "-0.2rem !important"
      }

    
     
}));



const TableComponents = {
  Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
  Table: (props) => <Table {...props} style={{ borderCollapse: 'collapse',}} />,
  TableHead: TableHead,
  TableRow: TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
}


export default function   ListTable(props) {
  const [scrolledListData, setScrolledListData] = React.useState(props.listData)
  const [fullAccordianOpen,setFullAccordianOpen]=React.useState(false)
  const {columns}=props
  const classes = useStyles(); 
  const handleChange = ()=> {
    setFullAccordianOpen(!fullAccordianOpen)
  }


return (

  <div className={classes.tableContainer}>
     {fullAccordianOpen===true?<UnfoldLessIcon   onClick={()=>handleChange()}/>:<UnfoldMoreIcon  onClick={()=>handleChange()}/>}
  <div className={classes.table}>
 
 
  <TableVirtuoso className={`${classes.virtualizedTable} ${columns.length === 3 ? 'table1' : columns.length === 2 ? 'table2' : ''}`}
  data={scrolledListData}
  components={TableComponents}
  fixedHeaderContent={() => (
      <TableHead className={classes.tableHeadContainer}>
      <div  className={classes.tableHead}>

           <Accordion expanded = {true}  >
            <AccordionSummary  className={classes.accordianSummary}>        
          <TableRow  className={classes.tableRow} >  
              {columns[0].row.map((headCell) => ( 
              
             <TableCell
              style={{ width: headCell.minWidth,flexGrow:headCell.flexGrow,left:headCell.left}}
              key={headCell.id}
              className={classes.tableCell}
             >   
                <div style={{ display: 'flex', alignItems: 'start' }}>
                <span style={{lineHeight:"1rem"}}>  {headCell.label} </span>
                    {headCell.filter && <FilterListIcon style={{ marginTop: "-0.2rem" }}/>}
                   
                </div>
 
            
             </TableCell> ))}
             
        </TableRow></AccordionSummary>
          {columns.map((row,i) => (
          <AccordionDetails  className={classes.accordionDetails}>
             <div className={classes.accordionDetailsContainer}>
            
              <TableRow className={classes.tableRow} key={i}>  
            {i>0?
               row.row.map((headCell) => ( 
               
              <TableCell
              
               style={{ width: headCell.minWidth,flexGrow:headCell.flexGrow,left:headCell.left}}
               key={headCell.id}
               className={classes.tableCell}
              
              >       
                <div  className={classes.tableCellContainer}>
                  <span  className={classes.tableCellName}>  {headCell.label} </span>
                    {headCell.filter && <FilterListIcon  className={classes.filter}/>}
                </div>
                  
             
               </TableCell> ))
              
             :null}</TableRow> 
        </div>
          </AccordionDetails>   ))}</Accordion>
           </div>
      </TableHead>
 
    
    
    
    
    
    
    )}
  
  itemContent={(index, data) => {
    
     
   
          return(
         
            <Joblisttablebody 
                      data = {data}
                      columns = {columns}
                      accordionFullOpen = {fullAccordianOpen}
                      index = {index}
                      
                    
                     
                  
                      
                      />
            
            
          )
        
       

      
     }}
      
  />
  </div>
  </div>
)
    }


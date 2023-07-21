import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { MenuBar1 } from "./OptionMenuBar.js";
import Checkbox from "@mui/material/Checkbox";
//import {TextField} from "@mui/material";
import TextField from './TextField.js'
import { Divider,Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles(() => ({
  tableRowContainer: {
    display: "flex",
    // boxShadow: "0px 0px 13px #EEEEF8",
    // borderRadius: "8px",
    // marginRight: "10px",
    marginBottom: "8px",
    "& .MuiPaper-root": {
      // boxShadow: "0px 0px 13px #EEEEF8 !important",                                                                                                                                                                                                                                                     
    },
  },
  tableRowStyle: {
    boxShadow: "0px 0px 13px #EEEEF8",
    borderRadius: "8px",
    marginRight: "10px",
    marginBottom: "15px",
    flexGrow: 1,
  },
  accordion: {
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
  },
  accordionDetail: {
    marginTop: "-2rem",
    display: "flex !important",
    flexDirection: "column",
  },
  TableRow: {
    width: "100%",
    display: "flex !important",
  },
  TableRow2: {
    display: "flex !important",
  },

  tableBodyCell: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "12px !important",
    color: "#050E25 !important",
    fontFamily: "Inter !important",
    borderBottom: "none !important",
    position: "relative",
    fontWeight: "400",
  },
  sNoContainer: {
    display: "flex",
    alignItems: "center",
  },
  number: {
    maxWidth: "55px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Inter !important",
    fontSize: "12px !important",
    color: "#050E25 !important",
  },

  menuBar: {
    position: "relative",
    left: "50%",
  },
  iconsboxClosed: {
    height: "1.7rem",
    borderRadius: "1rem",
    position: "absolute",
    left: "45%",
    // top:"77%",
    marginTop: "-12px",
    width: "50%",
  },
  iconsboxOpened: {
    height: "1.7rem",
    borderRadius: "1rem",
    position: "absolute",
    left: "45%",
    marginTop: "-12px",
    //top:"91%" ,
    width: "45%",
  },
  landIcon: {
    height: "16px !important",
    width: "16px !important",
    color: "#FCD277",
  },
  airIcon: {
    height: "16px !important",
    width: "16px !important",
    color: "#99A7F1",
  },
  shipIcon: {
    height: "16px !important",
    width: "16px !important",
    color: "#65D4BA",
  },
  link: {
    cursor: "pointer",
  },

  TableCellInfo: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    wordBreak: "break-word",
    fontFamily: "Inter !important",
    fontSize: "12px !important",
    fontWeight: "400",
  },
  // Checkbox: {
  //   alignSelf: "start",
  //   marginTop: "19px !important",
  //   "& .MuiSvgIcon-root": {
  //     height: "16px",
  //     width: "16px",
  //     borderRadius: "3px",
  //     // color:'#9497A1'
  //   },
//},
  checkedFalse: {
   
      alignSelf: "start",
      marginTop: "19px !important",
      "& .MuiSvgIcon-root": {
        height: "16px",
        width: "16px",
        borderRadius: "3px",
      },
      color: "#9497A1 !important",
    },
    checkedTrue: {
      
      alignSelf: "start",
      marginTop: "19px !important",
      "& .MuiSvgIcon-root": {
        height: "16px",
        width: "16px",
        borderRadius: "3px",
      },
      color: "#3874FF !important",
    },
    addIcon:{
      cursor:"pointer",
      height:"12px !important",
      width:"12px !important",
      position:"absolute"
    },
}));

export default function Joblisttablebody(props) {
  const classes = useStyles();
  const [accordionOpen, setAccordionOpen] = React.useState(
    props.hover || props.hover === undefined ? false : true
  );
  const [isHovered, setIsHovered] = useState(false);
  const [checkedCheckbox, setCheckedBox] = useState(false);
  const { columns, index, checkbox, hover, headerCheckbox ,  } = props;
  const [data, setData] = useState([])
  console.log("...",props.datas)
  // console.log("===",data)


 
 

  React.useEffect(() => {
    //console.log('React Use Effect calling in Job List Table Body')
    if (props.accordionFullOpen === true) {
      setAccordionOpen(true);
    } else if (props.accordionFullOpen === false) {
      setAccordionOpen(false);
    }
    if (headerCheckbox) {
      setCheckedBox(true);
    } else {
      setCheckedBox(false);
    }
  }, [props.accordionFullOpen, headerCheckbox]);



  const handleDataUpdate = (name,newValue) => {
    //console.log('name,value',name,newValue)
    setData((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };

const handleAddItem=(event,index)=>{
  props.AddRow(index)
}

  const handleCheckbox = () => {
    setCheckedBox(!checkedCheckbox);
  };

  return (
    <div  onMouseLeave={() => setIsHovered(false)}   onMouseEnter={() => setIsHovered(true)}>
       <div
      className={classes.tableRowContainer}
     
    >
      {checkbox && (
        <Checkbox
         
          className={
            checkedCheckbox ? classes.checkedTrue : classes.checkedFalse
          }
          checked={checkedCheckbox}
          onChange={handleCheckbox}
        />
      )}
      <div className={classes.tableRowStyle}>
        <Accordion expanded={accordionOpen} className={classes.accordion}>
          <AccordionSummary>
            <TableRow
              className={classes.TableRow}
              key={index}
             // onMouseEnter={() => setIsHovered(true)}
            >
              {columns[0].row.map((column) => {
                return (
                  <TableCell
                    style={{
                      width: column.minWidth,

                      flexGrow: column.flexGrow,

                      left: column.left,
                    }}
                    key={column.id}
                    className={classes.tableBodyCell}
                  >
                    {column.id === "srNo" && (
                      <div className={classes.sNoContainer}>
                        <Typography className={classes.number}>{`${
                          index + 1
                        }. \u00A0`}</Typography>
                        {props.datas?.mot ? (
                          props.datas.mot === "Land" || data.mot === "L-Land" ? (
                            <LocalShippingIcon className={classes.landIcon} />
                          ) : props.datas.mot === "Air" ? (
                            <LocalAirportIcon className={classes.airIcon} />
                          ) : (
                            <DirectionsBoatIcon className={classes.shipIcon} />
                          )
                        ) : null}
                      </div>
                    )}

                    {/* {column.id === "jobNo" ? (
                    <Link
                      className={`${classes.link} ${classes.TableCellInfo}`}
                    >
                      {data[column.id]}
                    </Link>
                  ) : column.id !== "srNo" ? (
                    <Typography className={classes.TableCellInfo}>
                      {" "}
                      {data[column.id]}{" "}
                    </Typography>
                  ) : (
                    ""
                  )} */}
                    {column.id !== "srNo" ?      <TextField
                    variant="standard"
                   disableLine={true}
                   disabled={true}
                      style={{ fontFamily: 'Inter', fontSize: '14px' }}
                     customClass={classes.textField}
                     handledata={handleDataUpdate}
                     name={column.id}
                      value={props.datas[column.id]}
                     
                    /> : (
                      ""
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </AccordionSummary>
          {columns.map((row, i) => (
            <AccordionDetails className={classes.accordionDetail}>
              <TableRow
                className={classes.TableRow2}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
              >
                {i > 0
                  ? row.row.map((column) => {
                      return (
                        <TableCell
                          style={{
                            width: column.minWidth,
                            flexGrow: column.flexGrow,
                            left: column.left,
                          }}
                          key={column.id}
                          className={classes.tableBodyCell}
                        >
                              <TextField
                    variant="standard"
                   disableLine={true}
                  
                      style={{ fontFamily: 'Inter', fontSize: '14px' }}
                     customClass={classes.textField}
                     handledata={handleDataUpdate}
                     name={column.id}
                      value={props.datas[column.id]}
                     
                    />
                        </TableCell>
                      );
                    })
                  : null}
              </TableRow>
            </AccordionDetails>
          ))}
        </Accordion>

        {isHovered && (hover || hover === undefined) ? (
          <span
            className={
              accordionOpen === false
                ? classes.iconsboxClosed
                : classes.iconsboxOpened
            }
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            <MenuBar1
              accordionOpen={accordionOpen}
              setAccordionOpen={setAccordionOpen}
            />
          </span>
        ) : null}




      </div>
      
    </div>
    {true   ? (
          <Grid style={{height:"16px",display: "flex", justifyContent:"center",alignItems:"center", }} 
          onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}>
         <Divider sx={{backgroundColor:"blue",marginLeft:"5px",width:'100%'}}/>
         <AddIcon className={classes.addIcon} onClick={(event) => handleAddItem(event, index)} />
          </Grid>
        ) : null}
    
    </div>
 
  );
}

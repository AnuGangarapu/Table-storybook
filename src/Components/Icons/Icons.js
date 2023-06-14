
import React from 'react'
import styled from 'styled-components';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import CallSplitOutlinedIcon from '@mui/icons-material/CallSplitOutlined';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import ShareIcon from '@mui/icons-material/Share';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import DoneOutlineSharpIcon from '@mui/icons-material/DoneOutlineSharp';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AddIcon from '@mui/icons-material/Add';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CallMergeOutlinedIcon from '@mui/icons-material/CallMergeOutlined';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import { makeStyles } from "@mui/styles";



const icons=[
         {name:'FilterListIcon',icon:<FilterListIcon/>},
         {name:'ShuffleIcon',icon:<ShuffleIcon/>},
         {name:'CallSplitOutlinedIcon',icon:<CallSplitOutlinedIcon/>},
         {name:'ControlPointDuplicateIcon',icon:<ControlPointDuplicateIcon/>},
         {name:'CurrencyExchangeSharpIcon',icon:<CurrencyExchangeSharpIcon/>},
         {name:'ShareIcon',icon:<ShareIcon/>},
         {name:'DeleteSweepOutlinedIcon',icon:<DeleteSweepOutlinedIcon/>},
         {name:'CalculateOutlinedIcon',icon:<CalculateOutlinedIcon/>},
         {name:'AppsOutlinedIcon',icon:<AppsOutlinedIcon/>},
         {name:'FormatQuoteOutlinedIcon',icon:<FormatQuoteOutlinedIcon/>},
         {name:'InsertInvitationOutlinedIcon',icon:<InsertInvitationOutlinedIcon/>},
         {name:'FileDownloadOutlinedIcon',icon:<FileDownloadOutlinedIcon/>},
         {name:'FileUploadOutlinedIcon',icon:<FileUploadOutlinedIcon/>},
         {name:'FindReplaceIcon',icon:<FindReplaceIcon/>},
         {name:'DoneOutlineSharpIcon',icon:<DoneOutlineSharpIcon/>},
         {name:'DocumentScannerOutlinedIcon',icon:<DocumentScannerOutlinedIcon/>},
         {name:'VisibilityOutlinedIcon',icon:<VisibilityOutlinedIcon/>},
         {name:'DifferenceOutlinedIcon',icon:<DifferenceOutlinedIcon/>},
         {name:'DoneAllOutlinedIcon',icon:<DoneAllOutlinedIcon/>},
         {name:'CloseOutlinedIcon',icon:<CloseOutlinedIcon/>},
         {name:'ArrowBackIosNewOutlinedIcon',icon:<ArrowBackIosNewOutlinedIcon/>},
         {name:'AddIcon',icon:<AddIcon/>},
         {name:'LockOutlinedIcon',icon:<LockOutlinedIcon/>},
         {name:'CancelOutlinedIcon',icon:<CancelOutlinedIcon/>},
         {name:'UnfoldLessOutlinedIcon',icon:<UnfoldLessOutlinedIcon/>},
         {name:'UnfoldMoreOutlinedIcon',icon:<UnfoldMoreOutlinedIcon/>},
         {name:'InfoOutlinedIcon',icon:<InfoOutlinedIcon/>},
         {name:'MoreVertOutlinedIcon',icon:<MoreVertOutlinedIcon/>},
         {name:'KeyboardArrowDownOutlinedIcon',icon:<KeyboardArrowDownOutlinedIcon/>},
         {name:'KeyboardControlKeyOutlinedIcon',icon:<KeyboardControlKeyOutlinedIcon/>},
         {name:'ModeEditOutlinedIcon',icon:<ModeEditOutlinedIcon/>},
         {name:'ArchiveOutlinedIcon',icon:<ArchiveOutlinedIcon/>},
         {name:'MailOutlinedIcon',icon:<MailOutlinedIcon/>},
         {name:'CallMergeOutlinedIcon',icon:<CallMergeOutlinedIcon/>},
         {name:'AutoFixHighIcon',icon:<AutoFixHighIcon/>},
         {name:"LibraryAddIcon",icon:<LibraryAddIcon/>},
         {name:'RedoIcon',icon:<RedoIcon/>},
         {name:'UndoIcon',icon:<UndoIcon/>}
]










const useStyles = makeStyles({
  icon: {
    color: "#626776",
   display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    "&:hover": {
      color: "#050E25",
      backgroundColor: "#D9D9D9",
    },
  },
  clicked: {
    color: "#3874FF",
    backgroundColor: "transparent",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    "&:hover": {
      color: "#3874FF",
      backgroundColor: "transparent",
    },
  },
  disabled: {
    color: '#CDCFD3',
    backgroundColor: 'transparent',
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    '&:hover': {
      color: '#CDCFD3',
      backgroundColor: 'transparent',
    },
  },
});

function Icons(props) {
  const { iconName ,clicked,disabled} = props;
  const classes = useStyles();
  

  

  const getIconByName = (iconName) => {
    const icon = icons.find((item) => item.name === iconName);
    return icon ? icon.icon : null;
  };

  return (
    
    <span>
    <svg    className={clicked ? classes.clicked : disabled ? classes.disabled : classes.icon}>
      {getIconByName(iconName)}
    </svg>
  </span>
   
  );
}

export default Icons;

import React from "react";
import ListTable from "./Table"


export default {
    title:'Form/Table',
    //component:Table,
    args:{
        children:'Button'
    },
    
}   
const importColumns = [{
    row: [
    {id : 'srNo' ,numeric: true , minWidth:80,isSortable: true , default :true , label:'S.No' , },//flexGrow:1
    { id: 'jobNo', numeric: false, minWidth: 90, isSortable: false, default: true, display: false, label: 'Job No', sticky: true,flexGrow:1,},
    { id: 'jobCreationDate', numeric: false, minWidth: 90, isSortable: true, default: true, display: false, label: 'Job Date & Time' ,filter:true,flexGrow:1,},
    { id: 'transactionRefNo', numeric: false, minWidth: 90,isSortable: false, default: true, display: true, label: 'Reference No.' ,flexGrow:1,},
    { id: 'consigneeName', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'Importer',filter:true,flexGrow:1,},
    { id: 'shipperName', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'Supplier',filter:true,flexGrow:1,},
    { id: 'cbBranch', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'CB Branch' , filter:true,flexGrow:1,},
    { id: 'status', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'Status' ,filter:true,flexGrow:1,},
    { id: 'createdBy', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'Assigned To',filter:true,flexGrow:1,},
   
  ]
  },
  {
    row: [
      {id : '23456789' ,numeric: true , minWidth:80, isSortable: true , default :true , label:'' ,  },
      { id: 'FromAddress', numeric: false, minWidth: 180, isSortable: false, default: true, display: false, label: 'From Address', sticky: true,flexGrow:2,},
      {id:"ToAddress" , display:true , isSortable: false, default: true, minWidth:90,  label:"To Address",flexGrow:1,left:'7px'},//left:'0.6%'
      { id: 'email', numeric: false, minWidth: 270, isSortable: false, default: true, display: true, label: 'EmailSubjectLine' ,flexGrow:3,left:'-5.2px'},//left:'-0.4%'
      { id: 'update', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'Created By' ,flexGrow:1,left:'23px',filter:true},
      {id:"time" , display:true ,isSortable: false, default: true, minWidth:90, label:"Updated By",flexGrow:1,left:'12px',filter:true},
    
      
       
     ]
  },
  {
    row: [
     
       {id:"" , display:true ,isSortable: false, default: true, minWidth:80 , label:"",},
       {id:"a" , display:true , isSortable: false, default: true, minWidth:90,  label:"Updated Date& Time",flexGrow:1,},
       {id:"customsHouseCode" , display:true , isSortable: false, default: true, minWidth:90 ,  label:"Port Of Loading",flexGrow:1,filter:true},
       { id: 'beSbNo', numeric: false, minWidth:90, isSortable: false, default: true, display: true, label: 'Custom House Code',flexGrow:1,filter:true },
       { id: 'beSbDate', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'BE Number' ,flexGrow:1,filter:true},
       { id: 'beSbType', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'BE Date',flexGrow:1,filter:true },
       { id: 'jobInvFobValue', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'BE Type',flexGrow:1, },
       { id: 'dutyPayable', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'Assesable Value',flexGrow:1, },
       {id:"" , display:true ,isSortable: false, default: true, minWidth:90, label:"Duty Payable",flexGrow:1,},
       
    ]
  },];
  
  const importColumns2 = [{
    row: [
    {id : 'srNo' ,numeric: true , minWidth:80,isSortable: true , default :true , label:'S.No' , },//flexGrow:1
    { id: 'No', numeric: false, minWidth: 90, isSortable: false, default: true, display: false, label: 'Job No', sticky: true,flexGrow:1,},
    { id: 'jobCreationDate', numeric: false, minWidth: 90, isSortable: true, default: true, display: false, label: 'Date' ,filter:true,flexGrow:1,},
    { id: 'transactionRefNo', numeric: false, minWidth: 90,isSortable: false, default: true, display: true, label: 'Reference No.' ,flexGrow:1,},
    { id: 'consigneeName', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'Importer',filter:true,flexGrow:1,},
    { id: 'shipperName', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'Supplier',filter:true,flexGrow:1,},
    
   
  ]
  },
 
  {
    row: [
     
       {id:"" , display:true ,isSortable: false, default: true, minWidth:80 , label:"",},
       {id:"a" , display:true , isSortable: false, default: true, minWidth:80,  label:"Updated Date& Time",flexGrow:1,},
       {id:"customsHouseCode" , display:true , isSortable: false, default: true, minWidth:80 ,  label:"Port Of Loading",flexGrow:1,filter:true},
       { id: 'beSbNo', numeric: false, minWidth:80, isSortable: false, default: true, display: true, label: 'Custom House Code',flexGrow:1,filter:true },
       { id: 'beSbDate', numeric: false, minWidth: 80, isSortable: false, default: true, display: true, label: 'BE Number' ,flexGrow:1,filter:true},
       { id: 'beSbType', numeric: false, minWidth: 80, isSortable: false, default: true, display: true, label: 'BE Date',flexGrow:1,filter:true },
       
       
    ]
  },];


  // const importColumns3 = [{
  //   row: [
  //   {id : 'srNo' ,numeric: true , minWidth:80,isSortable: true , default :true , label:'S.No' , },//flexGrow:1
  //   { id: 'jobNo', numeric: false, minWidth: 90, isSortable: false, default: true, display: false, label: 'Job No', sticky: true,flexGrow:1,},
  //   { id: 'jobCreationDate', numeric: false, minWidth: 90, isSortable: true, default: true, display: false, label: 'Job Date & Time' ,filter:true,flexGrow:1,},
  //   { id: 'transactionRefNo', numeric: false, minWidth: 90,isSortable: false, default: true, display: true, label: 'Reference No.' ,flexGrow:1,},
  //   { id: 'consigneeName', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'Importer',filter:true,flexGrow:1,},
  //   { id: 'shipperName', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'Supplier',filter:true,flexGrow:1,},
  //   { id: 'cbBranch', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'CB Branch' , filter:true,flexGrow:1,},
  //   { id: 'status', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'Status' ,filter:true,flexGrow:1,},
  //   { id: 'createdBy', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'Assigned To',filter:true,flexGrow:1,},
   
  // ]
  // },
  // {
  //   row: [
  //     {id : '23456789' ,numeric: true , minWidth:80, isSortable: true , default :true , label:'' ,  },
  //     { id: 'FromAddress', numeric: false, minWidth: 180, isSortable: false, default: true, display: false, label: 'From Address', sticky: true,flexGrow:2,},
  //     {id:"ToAddress" , display:true , isSortable: false, default: true, minWidth:90,  label:"To Address",flexGrow:1,left:'7px'},//left:'0.6%'
  //     { id: 'email', numeric: false, minWidth: 270, isSortable: false, default: true, display: true, label: 'EmailSubjectLine' ,flexGrow:3,left:'-5.2px'},//left:'-0.4%'
  //     { id: 'update', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'Created By' ,flexGrow:1,left:'23px',filter:true},
  //     {id:"time" , display:true ,isSortable: false, default: true, minWidth:90, label:"Updated By",flexGrow:1,left:'12px',filter:true},
    
      
       
  //    ]
  // },
  // {
  //   row: [
     
  //      {id:"" , display:true ,isSortable: false, default: true, minWidth:80 , label:"",},
  //      {id:"a" , display:true , isSortable: false, default: true, minWidth:90,  label:"Updated Date& Time",flexGrow:1,},
  //      {id:"customsHouseCode" , display:true , isSortable: false, default: true, minWidth:180 ,  label:"Port Of Loading",flexGrow:2,filter:true},
      
  //      { id: 'beSbDate', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'BE Number' ,flexGrow:1,filter:true},
     
  //      { id: 'jobInvFobValue', numeric: false, minWidth: 180, isSortable: true, default: true, display: true, label: 'BE Type',flexGrow:2, },
  //      { id: 'dutyPayable', numeric: false, minWidth: 90, isSortable: true, default: true, display: true, label: 'Assesable Value',flexGrow:1, },
  //      {id:"" , display:true ,isSortable: false, default: true, minWidth:90, label:"Duty Payable",flexGrow:1,},
       
  //   ]
  // },];
  
  



  const scrolledListData=[
    
    {id:0, a:'14/09/2022 4:00pm',
    jobNo: "AICB/1438/2023-24",
    jobCreationDate:'14/09/2022 4:00pm',beSbType:'14/09/2022',time:'14/09/2022 4:00pm',transactionRefNo:'FJIMAAMIMP-2213033 2',shipperName:'Harmo International Pvt Ltd.',consigneeName:"XYZ",f:'Tokyo',
  status:"Success",customsHouseCode:"12345678",customsHouseCode:'',createdBy:'XYZ',beSbNo:"INCCV4",update:'XYZ',email:'Invoice No M3/ 009 M3 Overseas yz@unifo.in',mot:'Land',FromAddress:'xyz@ccu@flyjacLogistics.comdice@unifo.in',ToAddress:'xyz@unifo.inyz@unifo.inyz@unifo.inyz@unifo.inyz@unifo.in'},
  
    {id:0, a:'sxdgfvbnc fgbh',jobNo: "ECB/1438/2023-24",beSbType:'rfsdgelijmko,',jobCreationDate:'22-05-2023',time:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",f:'sdefrgthiu',
  status:"Success",customsHouseCode:"12345678",customsHouseCode:'cxbgvvbh',createdBy:'XYZ',beSbNo:"sdfghj",update:'wsdetfgh',email:'wertyuioASDFGHJ',mot:'Air',FromAddress:'23456789012345',ToAddress:'23456789'},
  
  {id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",email:'werfghjsdfgthygtfdesedfrgthy@mail',mot:'Sea',FromAddress:'2389012345678123456782345678234234567823456',ToAddress:'234567321123456789'},
  
  {id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XSDFGHJKQW',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",mot:'Air'},
   
  {id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",email:'wertyuioASDFGHJKdfghjsdfgthygtfdesedfrgthy@mail',mot:'Land',FromAddress:'23456789012345678902345678901234567890123456781234567823456782345678234567823456',ToAddress:'23456789012345678123456789987654321123456789'},
  
  
  {id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",mot:'Sea'},
  
  {id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",mot:'Land'},
  
  {id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",mot:'Air'},
  
  {id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",mot:'Sea',},
  
  
  {id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",mot:'Land'},{id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",mot:'Sea'},{id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},{id:0, jobNo: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},
  
  
  ]
  const scrolledListData2=[
    
    {id:0, a:'14/09/2022 4:00pm',
    No: "AICB/1438/2023-24",
    jobCreationDate:'14/09/2022 4:00pm',beSbType:'14/09/2022',time:'14/09/2022 4:00pm',transactionRefNo:'FJIMAAMIMP-2213033 2',shipperName:'Harmo International Pvt Ltd.',consigneeName:"XYZ",f:'Tokyo',
  status:"Success",customsHouseCode:"12345678",customsHouseCode:'',no:"123",createdBy:'XYZ',beSbNo:"INCCV4",update:'XYZ',email:'Invoice No M3/ 009 M3 OverseasInvoice No M3/ 009 M3 Overseas',FromAddress:'xyz@ccu@flyjacLogistics.comdice@unifo.in',ToAddress:'xyz@unifo.inyz@unifo.in'},
  
    {id:0, a:'sxdgfvbnc fgbh',No: "ECB/1438/2023-24",beSbType:'rfsdgelijmko,',jobCreationDate:'22-05-2023',time:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",f:'sdefrgthiu',
  status:"Success",customsHouseCode:"12345678",customsHouseCode:'cxbgvvbh',createdBy:'XYZ',no:"123",beSbNo:"sdfghj",update:'wsdetfgh',email:'wertyuioASDFGHJ',FromAddress:'23456789012345',ToAddress:'23456789'},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",email:'werfghjsdfgthygtfdesedfrgthy@mail',FromAddress:'2389012345678123456782345678234234567823456',ToAddress:'234567321123456789'},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XSDFGHJKQW',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},
   
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",email:'wertyuioASDFGHJKdfghjsdfgthygtfdesedfrgthy@mail',FromAddress:'23456789012345678902345678901234567890123456781234567823456782345678234567823456',ToAddress:'23456789012345678123456789987654321123456789'},
  
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},
  
  
  {id:0, No: "123",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},{id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},{id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},{id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},
  
  
  ]

const Template=args=><ListTable {...args}/>

export const TableA=Template.bind({})
TableA.args={
    columns:importColumns,
    listData:scrolledListData
    
}

export const TableB=Template.bind({})
TableB.args={
    columns:importColumns2,
    listData:scrolledListData2
    
}
// export const TableC=Template.bind({})
// TableC.args={
//     columns:importColumns3,
//     listData:scrolledListData
    
// }
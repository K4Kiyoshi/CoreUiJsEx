import React, { useState } from "react";
import DataForm from "./DataForm";


function SubMenu5() {
   
// Radio------------------------------------------------------------->
      const [RadioData] = useState([
        {id: 1,name: "Male" },
        {id: 2,name: "Female" },
      ]);
      

      const [RadioCheck, setRadioCheck] = useState("");
      const [RadioRes, setRadioRes] = useState("");
    
    
    let radioClick = (id,name)=> {
      setRadioRes(name);
      setRadioCheck(id);
    }
// Radio------------------------------------------------------------->  
// checkbox--------------------------------------------------------------------
let [chkData, SetChkData] = useState([
  { id: "1", name: "React" },
  { id: "2", name: "PHP" },
  { id: "3", name: "Java" }
  
]);

let [chkValue, setCheckValue] = useState([]);
let [chkResult, setCheckResult] = useState("");

let [resultData, setResultData] = useState([]);

let ResultNameArr = [];

const chkChange = (e) => {
  let RestultArr = [];
  let value = e.target.value;
  let chked = e.target.checked;
  let chkedData = chkData.map((obj) =>
    obj.id === value ? { ...obj, is_checked: chked } : obj
  );
  SetChkData(chkedData);
  // console.log(chkedData);
  chkedData.filter((data) =>
    data.is_checked ? RestultArr.push(data.name) : ""
  );

  setResultData(RestultArr);
};

// checkbox--------------------------------------------------------------------
// Dropdown--------------------------------------------------------------------
const [ dropData, setDropData ] = useState([
  {id: 1,name: "IT Depertment"},
  {id: 2,name: "Sale"},
  {id: 3,name: "FrontEnd"},
  {id: 4,name: "BackEnd"}
]);

let searchClick = () => {
  let obj = []
  if(searchData == ""){
    alert("Please Select")
  
  }else if(searchData == 1){
   obj = [{
          "id": 1,
          "name": "IT Depertment",
   }]
  }else if(searchData == 2){
    obj = [{
      "id": 2,
      "name": "Sale",
  }]
  
  }else if(searchData == 3){
    obj = [{
      "id": 3,
      "name": "FrontEnd",
  }]
  
  }else{
    obj = [{
      "id": 4,
      "name": "BackEnd",
  
  }]
  
  }
  setRes(obj)
  
  }
  
  
  const [searchData, setSearchData] = useState("");
  const [Res, setRes] = useState([]);

  let searchChange =(e) => {
  setSearchData(e.target.value);
  }





// Dropdown--------------------------------------------------------------------
//Name-------------------------------------------------------------------------
const [userName,setUserName] = useState("");
const handleChangeName = (e) =>{
  setUserName(e.target.value);
}
//Name--------------------------------------------------------------------------
  return (
    <>
     
      
      <DataForm  RadioData={RadioData} radioClick={radioClick}  RadioCheck={RadioCheck} RadioRes={RadioRes}
      chkData={chkData} chkValue={chkValue} chkResult={chkResult} chkChange={chkChange} resultData={resultData}
       dropData={dropData} searchData={searchData} searchChange={searchChange} searchClick={searchClick}
       userName={userName} handleChangeName={handleChangeName} Res={Res}
      />
     
    </>
  );
}
export default SubMenu5;

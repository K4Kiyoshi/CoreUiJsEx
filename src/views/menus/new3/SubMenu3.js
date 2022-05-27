import React, { useState } from "react";
import InputData from "./InputData";
import DataDisplay from "./DataDisplay";
import SearchData from "./SearchData";
import SearchTable from "./SearchTable";

import '.././style.css';
let SubMenu3=()=> {

  const [ID, setID] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Table, setTable] = useState([]);
  const [ dropData, setDropData ] = useState([
    {id: 1,name: "ID"},
    {id: 2,name: "Name"},
    {id: 3,name: "Email"},
    {id: 4,name: "Phone"}
  ]);

  const [RadioCheck, setRadioCheck] = useState([]);
  const [RadioRes, setRadioRes] = useState([]);


let RadioClick = ()=> {
  setRadioRes();
}

  const [searchData, setSearchData] = useState("");
  const [Res, setRes] = useState([]);

  let searchChange =(e) => {
  setSearchData(e.target.value);
  }


let searchClick = () => {
let obj = []
if(searchData == ""){
  alert("Please Select")

}else if(searchData == 1){
 obj = [{
        "id": 1,
        "name": 1,
        "email":1,
        "phone":1,
        "description": 1

 }]
}else if(searchData == 2){
  obj = [{
    "id": 2,
    "name": 2,
    "email":2,
    "phone":2,
    "description": 2

}]

}else if(searchData == 3){
  obj = [{
    "id": 3,
    "name": 3,
    "email":3,
    "phone":3,
    "description": 3

}]

}else{
  obj = [{
    "id": 4,
    "name": 4,
    "email":4,
    "phone":4,
    "description": 4

}]

}
setRes(obj)

}



  function handleChangeID(e) {
    const letters = /^[0-9]+$/;
    if (e.target.value === "" || letters.test(e.target.value)) {
      setID(e.target.value);
      } else  {
        alert("ID is Number Only")
        e.target.value = '';
      
    }}
     
//   function handleChangeMu2(e) {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === '' || re.test(e.target.value)) {
//     setsecint2(e.target.value);}
//   }   

      function handleChangeUserName(e) {
        const a = /^[A-Za-z]+$/;
      //   if (a.test(e.target.value)) {
      //       alert("UserName is Alphabet Only")
      // }   else {setUserName(e.target.value);}}
        if (e.target.value === "" || a.test(e.target.value)) {
      setUserName(e.target.value);
      } else  {
        alert("UserName is Alphabet Only")
        e.target.value = '';
      
    }}

      function handleChangeEmail(e) {
        setEmail(e.target.value);
      }   

       
      function handleChangePassword(e) {
        const s = /^[0-9]+$/;
        if (e.target.value === "" || s.test(e.target.value)) {
          setPhone(e.target.value);
          } else  {
            alert("Phone is Number Only")
            e.target.value = '';
          
        }}
  const add= () => {
    setTable([...Table,{"ID":ID,
    "UserName":UserName,
    "Email":Email,
    "Phone":Phone}
 ])


 let dataArr =[], tmp =[],tmpData = [];

        if(Table.length > 0 && ID!="" && UserName!="" && Email!="" && Phone!=""){
            for(let i=0; i< Table.length; i++){
                let oldData = Table[i];
                if(oldData["ID"] != ID ){
                    tmpData["ID"]=ID;
                    tmpData["UserName"]=UserName;
                    tmpData["Email"]=Email;
                    tmpData["Phone"]=Phone;

                    // dataArr.push(tmpData);
                    // let showArr = showTable.concat(dataArr);
                    // setShowTable(showArr);

                    setTable([...Table,tmpData]);

                }else if(oldData["ID"] == ID ){
                    alert(ID + " is already exit");
                    setTable(Table);
                    break;
                }
            } 
            // let showArr = showTable.concat(dataArr);
            // setShowTable(showArr);
            
        }
        else if(ID!="" && UserName!="" && Email!="" && Phone!=""){
            tmp["ID"]= ID;
            tmp["UserName"]= UserName;
            tmp["Email"]= Email;
            tmp["Phone"]= Phone;

            dataArr.push(tmp);
            setTable(dataArr);
        } }
  let remove=(ID)=>{
    let data = Table.filter((d)=>{
        return ID != d.ID
        
    })
    setTable(data);
    
}
  return (
    <>
      <div>
        <h1>Registration</h1>
        <InputData 
        Id={ID}
        UserName={UserName}
        Email={Email}
        Phone={Phone}
        handleChangeID={handleChangeID}
        handleChangeUserName={handleChangeUserName}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        add={add}
        
        />
        <br/>
        <DataDisplay
        Table ={Table}
        remove={remove}
        />

        <SearchData dropData={dropData} 
        searchData={searchData}
         searchChange={searchChange} 
         searchClick={searchClick} />

        <SearchTable Res={Res} RadioClick={RadioClick}/>
      </div>
    </>
  );
}
export default SubMenu3;

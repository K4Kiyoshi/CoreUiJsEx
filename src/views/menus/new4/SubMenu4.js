import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import RadioDisplay from "./RadioDisplay";
import ShowData from "./ShowData";

function SubMenu4() {
    const [ Data] = useState([
        {id: 1,name: "Yuwa" , email: "Yu@gmail.com" , phone: "09263254332"},
        {id: 2,name: "KoKo" , email: "KoKo@gmail.com" , phone: "0924434332"},
        {id: 3,name: "MoMo" , email: "MoMo@gmail.com" , phone: "0924554332"},
        {id: 4,name: "Mg" , email: "Mg@gmail.com" , phone: "09263543332"}
      ]);
      const [DisplayData, setDisplayData] = useState([]);


      const [RadioData] = useState([
        {id: 1,name: "Car" },
        {id: 2,name: "Taxi" },
        {id: 3,name: "Train" },
        {id: 4,name: "Bus" },
        {id: 5,name: "SiteKyalRoe" },
      ]);
      

      const [RadioCheck, setRadioCheck] = useState("");
      const [RadioRes, setRadioRes] = useState("");
    
    
    let radioClick = (id,name)=> {
      setRadioRes(name);
      setRadioCheck(id);
    }

      let detailFun=(data)=> {
        // console.log(data);
        setDisplayData(data);
      }   

      let Reset=()=> {
        setDisplayData({id: "",name: "" , email: "" , phone: ""})
      }   
  return (
    <>
      <div>
      <DisplayTable Data={Data} detailFun={detailFun}/>
      <br />
      <ShowData DisplayData={DisplayData} Reset={Reset}/>
      <br />
      
      <RadioDisplay  RadioData={RadioData} radioClick={radioClick}  RadioCheck={RadioCheck}
      RadioRes={RadioRes}
      />
      </div>
    </>
  );
}
export default SubMenu4;

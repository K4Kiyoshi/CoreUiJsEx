import React,{useState} from "react";
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow,
  CImg,
} from "@coreui/react";
import UserRegistration from "./userRegistration";
import UserProfile from "./userProfile";

const SubMenu = () => {

  const [userName,setUserName] = useState("");
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [phno,setPhno] = useState("");
  const [address,setAddress] = useState("");

  const handleChangeName = (e) =>{
    setUserName(e.target.value);
  }
  const handleChangeFullName = (e) =>{
    setFullName(e.target.value);
  }
  const handleChangeEmail = (e) =>{
    setEmail(e.target.value);
  }
  const handleChangePhno = (e) =>{
    setPhno(e.target.value);
  }
  const handleChangeAddress = (e) =>{
    setAddress(e.target.value);
  }

  return (
    <div className="row">
      <div className="col" style={{ display: "flex" }}>
        <UserRegistration   handleChangeName={handleChangeName} 
        handleChangeFullName={handleChangeFullName} 
        handleChangeEmail={handleChangeEmail} 
        handleChangePhno={handleChangePhno}
        handleChangeAddress={handleChangeAddress}/>
      </div>
      <div className="col" style={{ display: "flex" }}>
        <UserProfile userName={userName} fullName={fullName} email={email} phno={phno}  address={address} />
      </div>
    </div>
    
  );
};

export default SubMenu;

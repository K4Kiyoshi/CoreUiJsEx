import React from "react";
import '.././style.css'
const UserProfile = (props) =>{
    return(
        <div className ="re">
            <h1>User Profile</h1>
            <label >userName: </label>
            <span>{props.userName}</span><br/><br/>
            <label >FullName: </label>
            <span>{props.fullName}</span><br/><br/>
            <label >Email: </label>
            <span>{props.email}</span><br/><br/>
            <label >PhoneNo: </label>
            <span>{props.phno}</span><br/><br/>
            <label >Address: </label>
            <span>{props.address}</span><br/>
           
        </div>
    )
}

export default UserProfile
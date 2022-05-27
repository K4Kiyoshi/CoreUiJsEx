import React from "react";
import '.././style.css'
const UserRegistration = (props) =>{
    console.log(props)
    return(
        <div className="re">
            <h1>User Registration</h1>
            <label >UserName: </label>
            <input type="text"  onChange={(e) => props.handleChangeName(e)}/><br/>
            <label >FullName: </label>
            <input type="text"  onChange={(e) => props.handleChangeFullName(e)} /><br/>
            <label >Email</label>
            <input type="text" onChange={(e) => props.handleChangeEmail(e)} /><br/>
            <label >PhoneNo: </label>
            <input type="text" onChange={(e) => props.handleChangePhno(e)} /><br/>
            <label >Address: </label>
            <textarea  onChange={(e) => props.handleChangeAddress(e)}></textarea>
        </div>
    )
}

export default UserRegistration
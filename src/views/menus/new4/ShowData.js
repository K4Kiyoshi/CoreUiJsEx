import React from "react";
import '.././style.css'
const ShowData = (props) =>{
    let {DisplayData,Reset} = props;

    return(

        <div className="re">
            <h1>Display Data</h1>

            <label >ID </label>
            <input type="text" value={DisplayData.id} readOnly/><br/>
            <label >Name </label>
            <input type="text" value={DisplayData.name} readOnly/><br/>  
            <label >Email</label>
            <input type="text" value={DisplayData.email} readOnly/><br/> 
            <label >Phone </label>
            <input type="text"  value={DisplayData.phone} readOnly/><br/> 
            <button type="button" className="glow-on-hover" onClick={Reset} >Reset</button>
        </div>
    )
}

export default ShowData
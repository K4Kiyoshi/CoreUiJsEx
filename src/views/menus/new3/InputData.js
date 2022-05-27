import React from 'react'

function InputData(props) {
  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col"><label>ID</label></div>
          <div className="col"><label>Name</label></div>
          <div className="col"><label>Email</label></div>
          <div className="col"><label>Phone Number</label></div>
        </div>
        <div className="row">
          <div className="col"><input type="text" value={props.ID} onChange={props.handleChangeID}/></div>
          <div className="col"><input type="text" value={props.UserName} onChange={props.handleChangeUserName}/></div>
          <div className="col"><input type="text" value={props.Email} onChange={props.handleChangeEmail}/></div>
          <div className="col"><input type="text" value={props.Phone} onChange={props.handleChangePassword}/></div>
        </div>
        <br/>
        <center>
          {/* <button type="button" className="raise" onClick={props.add}>Add</button> */}
          

          <button className="glow-on-hover" type="button" onClick={props.add}> Add</button>
        <br></br>

        </center>
      
      </div>

        </>
        );
}
        export default InputData;
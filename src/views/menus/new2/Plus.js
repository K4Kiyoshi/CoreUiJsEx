import React from 'react'

function Plus(props) {
  return (
    <>
      
      <div  className="row" style={{ display: "flex" }}>
         
          <input type="text" value={props.firstint} onChange={props.handleChangeP1}></input>&emsp;
          <label>+</label> &emsp;  
          <input type="text" value={props.secint} onChange={props.handleChangeP2}></input>&emsp;
          <button type="button" onClick={props.plus}>=</button>&emsp;
          <input type="text" value={props.result}></input>
      </div>
    </>
  );
}
export default Plus;
import React from 'react'

function Minus(props) {
  return (
    <>
      
      <div  className="row" style={{ display: "flex" }}>
         
          <input type="text" value={props.firstint1} onChange={props.handleChangeM1}></input>&emsp;
          <label>-</label> &emsp;  
          <input type="text" value={props.secint1} onChange={props.handleChangeM2}></input>&emsp;
          <button type="button" onClick={props.minus}>=</button>&emsp;
          <input type="text" value={props.result1}></input>
      </div>
    </>
  );
}
export default Minus;
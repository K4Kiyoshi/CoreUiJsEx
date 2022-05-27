import React from 'react'

function Multiply(props) {
  return (
    <>
      
      <div  className="row" style={{ display: "flex" }}>
         
          <input type="text" value={props.firstint2} onChange={props.handleChangeMu1}></input>&emsp;
          <label>x</label> &emsp;  
          <input type="text" value={props.secint2} onChange={props.handleChangeMu2}></input>&emsp;
          <button type="button" onClick={props.multiply}>=</button>&emsp;
          <input type="text" value={props.result2}></input>
      </div>
    </>
  );
}
export default Multiply;
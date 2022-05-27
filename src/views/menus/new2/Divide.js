import React from 'react'

function Divide(props) {
  return (
    <>
      
      <div  className="row" style={{ display: "flex" }}>
         
          <input type="text" value={props.firstint3} onChange={props.handleChangeDi1}></input>&emsp;
          <label>/</label> &emsp;  
          <input type="text" value={props.secint3} onChange={props.handleChangeDi2}></input>&emsp;
          <button type="button" onClick={props.divide}>=</button>&emsp;
          <input type="text" value={props.result3}></input>
      </div>
    </>
  );
}
export default Divide;
import React from 'react'
import {
  CImg  
   } from '@coreui/react'

function DataDisplay(props) {
  return (
    <>
      
      <table className="table">

  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {props.Table.map((data, index) => {
    return (<>
        
            <tr key={index}>
                <td>{data.ID}</td>
                <td>{data.UserName}</td>
                <td>{data.Email}</td>
                <td>{data.Phone}</td>
                <td>
                                <CImg
                                    src={"/avatars/delete.png"}
                                    alt="id"
                                    width={20}
                                    height={20}
                                    style={{ marginLeft: "10px" }}
                                    onClick={() => props.remove(data.ID)}
                                />



                </td>
            </tr>
        
    </>)
    })
    }</tbody>
</table>
      
    </>
  );
}
export default DataDisplay;
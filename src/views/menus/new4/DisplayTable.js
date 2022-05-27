import React from "react";
import {
    CImg  
     } from '@coreui/react'
  
let DisplayTable = (props) => {
    let {Data,detailFun}= props;
    return (
     
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Detail</th>
                    </tr>

                </thead>
                <tbody>
                
            {Data.map((data,index) =>{
                return (
                <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                <CImg
                    src={"/avatars/a.png"}
                    alt="id"
                    width={20}
                    height={20}
                    style={{ marginLeft: "10px" }}
                    onClick={()=>detailFun(data)}
                />


                </td>
                 </tr>

                )

            })}





               </tbody>
                
            </table>
      
    </>
    
  );
}
export default DisplayTable;
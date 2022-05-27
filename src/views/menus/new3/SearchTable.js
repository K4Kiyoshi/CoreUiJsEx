import React from "react";

let SearchTable = (props) => {
    
    return (
     
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Description</th>
                    </tr>

                </thead>
                <tbody>
                
            {props.Res.map((data,index) =>{
                return (
                <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.description}</td>
                 </tr>

                )

            })}





               </tbody>
                
            </table>
      
    </>
    
  );
}
export default SearchTable;
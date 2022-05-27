import { CRow,CCol,CInputRadio, CLabel } from "@coreui/react";
import React from "react";
const RadioDisplay = props => {
    let {RadioData,radioClick,RadioRes,RadioCheck} = props;

    return(<>
    <CRow>
       
        { RadioData.map((data,index) =>{
            return (
            

                 <CCol lg="2" key={index}>
                
                    
                    <CInputRadio  type="radio"  value={data.id}
                    checked={ RadioCheck === data.id ? true : false }
                    onChange={()=> radioClick(data.id,data.name)}
                    />
                    <CLabel>
                        {data.name}
                    </CLabel>
                    
                    </CCol>
                
            )

        })}
        
        <CCol lg="12"> 
        <p>{RadioRes} is Selected</p>
        </CCol>
        </CRow>
    </>
    )
}

export default RadioDisplay;
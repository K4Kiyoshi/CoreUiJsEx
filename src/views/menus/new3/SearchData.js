import { CButton, CCol, CRow, CSelect } from '@coreui/react'
import React from 'react'


let SearchData = props=> {
    let { dropData,searchChange,searchData,searchClick} = props;
    return (
            <>
            <CRow>
                <CCol>
        <CSelect onChange={searchChange} value={searchData}>
            <option value="">Please Select Value</option>
        {dropData.map((data,index) => {

                    return (

                        <option key={index} id={data.id} value={data.id}>{data.name}</option>
                    )
        }



        )}

        </CSelect></CCol>
        <CButton style={{border: '1px solid' ,width: '80px'}} onClick={searchClick}>
                Search
        </CButton>
        </CRow>
        </>
    )
}
  export default SearchData;
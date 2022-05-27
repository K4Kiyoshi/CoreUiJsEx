import {
  CRow,
  CCol,
  CInputRadio,
  CLabel,
  CInputCheckbox,
  CSelect,
} from "@coreui/react";
import React from "react";
import "./style.css";
const DataForm = (props) => {
  let {
    RadioData,
    radioClick,
    RadioRes,
    RadioCheck,
    chkData,
    chkChange,
    resultData,
    dropData,
    searchChange,
    searchData,
    searchClick,
    Res,
    handleChangeName,
    userName,
  } = props;

  return (
    <>
      <CRow>
        <CCol lg="2" className="o">
          Student Name
        </CCol>
        <CCol className="o">
          <input type="text" onChange={(e) => handleChangeName(e)} />
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCol lg="2" className="o">
          Select Depertment
        </CCol>
        <CCol lg="2" className="o">
          <CSelect onChange={searchChange} value={searchData}>
            {dropData.map((data, index) => {
              return (
                <option
                  key={index}
                  id={data.id}
                  value={data.id}
                  onClick={searchClick}
                >
                  {data.name}
                </option>
              );
            })}
          </CSelect>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCol lg="2" className="o">
          Choose Gender
        </CCol>

        {RadioData.map((data, index) => {
          return (
            <CCol lg="2" key={index} className="o">
              <CInputRadio
                type="radio"
                value={data.id}
                checked={RadioCheck === data.id ? true : false}
                onChange={() => radioClick(data.id, data.name)}
              />
              <CLabel className="o">{data.name}</CLabel>
            </CCol>
          );
        })}
      </CRow>
      <br />
      <CRow>
        <CCol lg="2" className="o">
          Skill
        </CCol>

        {chkData.map((data, index) => {
          return (
            <CCol lg="2" key={index} className="o">
              <CInputCheckbox
                value={data.id}
                checked={data.is_checked}
                onChange={chkChange}
              />
              <CLabel className="o">{data.name}</CLabel>
            </CCol>
          );
        })}
      </CRow>
      <hr></hr>

      <CRow>
        <CCol lg="2" className="o">
          Student Name is
        </CCol>
        <CCol className="o">{userName}</CCol>
      </CRow>
      <br />
      <CRow>
        <CCol lg="2" className="o">
          Student Depertment is
        </CCol>
        <CCol className="o">
          {Res.map((data, index) => {
            return (
              <>
                <div key={index}>{data.name}</div>
              </>
            );
          })}
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCol lg="2" className="o">
          Gender is
        </CCol>
        <CCol className="o">{RadioRes}</CCol>
      </CRow>
      <br />
      <CRow>
        <CCol lg="2" className="o">
          Skill is
        </CCol>
        <CCol md="9" className="o">
          {resultData != "" &&
            resultData.map((i, index) => {
              return <CLabel key={index}> {i},</CLabel>;
            })}
        </CCol>
      </CRow>
    </>
  );
};

export default DataForm;

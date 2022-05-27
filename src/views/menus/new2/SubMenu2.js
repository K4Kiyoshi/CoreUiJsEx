// import React, { useState} from 'react'
// import Plus from "./Plus";
// import "./style.css"
// import {
// CImg  
// } from '@coreui/react'
// import Minus from './Minus';
// import Multiply from './Multiply';
// import Divide from './Divide';

// function SubMenu2() {

//   const [firstint,setfirstint] = useState("");
//   const [secint,setsecint] = useState("");
//   const [result,setresult] = useState("");

//   const [firstint1,setfirstint1] = useState("");
//   const [secint1,setsecint1] = useState("");
//   const [result1,setresult1] = useState("");

//   const [firstint2,setfirstint2] = useState("");
//   const [secint2,setsecint2] = useState("");
//   const [result2,setresult2] = useState("");

//   const [firstint3,setfirstint3] = useState("");
//   const [secint3,setsecint3] = useState("");
//   const [result3,setresult3] = useState("");
//   // const [op,setop] = useState("");

//   function handleChangeP1(e) {
//     const re = /^[0-9\b]+$/;
//       if (e.target.value === '' || re.test(e.target.value)) {
//     setfirstint(e.target.value);
//   }   }

//   function handleChangeP2(e) {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === '' || re.test(e.target.value)) {
//     setsecint(e.target.value);}
//   }   

//   function handleChangeM1(e) {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === '' || re.test(e.target.value)) {
//       setfirstint1(e.target.value);}
//   }   

//   function handleChangeM2(e) {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === '' || re.test(e.target.value)) {
//     setsecint1(e.target.value);}
//   }   

//   function handleChangeMu1(e) {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === '' || re.test(e.target.value)) {
//     setfirstint2(e.target.value);}
//   }   

//   function handleChangeMu2(e) {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === '' || re.test(e.target.value)) {
//     setsecint2(e.target.value);}
//   }   

//   function handleChangeDi1(e) {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === '' || re.test(e.target.value)) {
//     setfirstint3(e.target.value);}
//   }   

//   function handleChangeDi2(e) {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === '' || re.test(e.target.value)) {
//     setsecint3(e.target.value);}
//   }   

// // let plus =() => {
// //   let res = eval(`${firstint} ${op} ${secint}`);
// //   setresult(res);
// // }
  
// let plus =() => {
//     let a = firstint + secint;
//     setresult(a);
//   }

//   let minus =() => {
//     let b = firstint1 - secint1;
//     setresult1(b);
//   }

//   let multiply =() => {
//     let c = firstint2 * secint2;
//     setresult2(c);
  
//   }
  
//   let divide=() => {
//     let d = firstint3 / secint3;
//     setresult3(d);
//   }

//   return (
//     <>
//       <h1>
//         Calculation 
//         {/* <CImg
//           src={"/avatars/i.gif"}
//           alt="titleicon"
//           width={150}
//           height={150}
//           style={{ marginLeft: "20px" }}
//         /> */}
//       </h1>
    
//       <br/>
//       <div>
//       {/* <Plus firstint={firstint} secint={secint} result={result}
//       handleChangeP2={handleChangeP2} handleChangeP1={handleChangeP1} 
//       plus={plus()}/> 
     
//       <Minus firstint1={firstint1} secint1={secint1} result1={result1}
//       handleChangeM1={handleChangeM1} handleChangeM2={handleChangeM2} 
//       minus={minus()}
//       />

//       <Multiply firstint2={firstint2} secint2={secint2} result2={result2}
//       handleChangeMu2={handleChangeMu2} handleChangeMu1={handleChangeMu1} 
//       multiply={multiply()}
//       /> */}

//       <Divide firstint3={firstint3} secondint3={secint3} result3={result3}
//       handleChangeDi2={handleChangeDi2} handleChangeDi1={handleChangeDi1} 
//       divide={divide}
//       />


//       </div>
      
//     </>
//   );
//   }

// export default SubMenu2;
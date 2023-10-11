import React, { useState } from "react";
import Main from "./components/Main";
import "./App.css";

export default function App() {
  const [expenditList, setExpenditList] = useState([]);
  const [expenditSum, setExpenditSum] = useState(0);

  return (
    <div className='main-box'>
      <h1 className='title'>예산 계산기</h1>
      <Main
        expenditList={expenditList}
        setExpenditList={setExpenditList}
        expenditSum={expenditSum}
        setExpenditSum={setExpenditSum}
      />
      <div className='result'>총지출 : {expenditSum}원</div>
    </div>
  );
}

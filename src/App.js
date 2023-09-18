import React, { useState } from "react";
import Main from "./components/Main";
import Result from "./components/Result";

export default function App() {
  const [expenditList, setExpenditList] = useState([]);

  return (
    <div className='main-box'>
      <h1 className='title'>예산 계산기</h1>
      <Main expenditList={expenditList} setExpenditList={setExpenditList} />
      <Result expenditList={expenditList} setExpenditList={setExpenditList} />
    </div>
  );
}

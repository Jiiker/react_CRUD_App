import React, { useState } from "react";
import Main from "./components/Main";
import "./App.css";
import Alert from "./components/Alert";

export default function App() {
  const [expenditList, setExpenditList] = useState([]);
  const [expenditSum, setExpenditSum] = useState(0);
  const [alert, setAlert] = useState({ show: false });

  const handleAlert = ({ type, text }) => {
    alert.show = true;
    alert.type = type;
    alert.text = text;

    setAlert(alert);

    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  return (
    <div className='main-box'>
      {alert.show ? (
        <Alert type={`${alert.type}`} text={`${alert.text}`} />
      ) : null}
      <h1 className='title'>예산 계산기</h1>
      <Main
        expenditList={expenditList}
        setExpenditList={setExpenditList}
        expenditSum={expenditSum}
        setExpenditSum={setExpenditSum}
        handleAlert={handleAlert}
      />
      <div className='result'>총지출 : {expenditSum}원</div>
    </div>
  );
}

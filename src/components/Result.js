import React, { useState } from "react";
import "./Result.css";

export default function Result({ expenditList, setExpenditList }) {
  const handleMakeSum = () => {
    let sum = 0;
    if (expenditList.length === 0) return 0;
    for (let i = 0; i < expenditList.length; i++)
      sum = sum + parseInt(expenditList[i].money);

    return sum;
  };

  let expenditSum = handleMakeSum();

  return <div className='result'>총지출 : {expenditSum}원</div>;
}

import React, { useState } from "react";

export const Lists = ({
  itemList,
  setItemList,
  itemValue,
  setItemValue,
  expenditList,
  setExpenditList,
  modifying,
  setModifying,
  id,
  setId,
}) => {
  const itemInput = document.querySelector("#item-input");
  const moneyInput = document.querySelector("#money-input");
  const submitBtn = document.querySelector(".submitBtn");
  const inputBox = document.querySelector(".input-box");

  const handleDelete = (id) => {
    let deletedList = expenditList.filter((data) => data.id !== id);
    setExpenditList(deletedList);
  };

  const handleModify = (id) => {
    setModifying(true);
    setId(id);
  };

  return (
    <div>
      {expenditList.map((data) => (
        <div className='list-box' key={data.id}>
          <div class='list-box-item'>{data.item}</div>
          <div class='list-box-money'>{data.money}원</div>
          <div>
            <button onClick={() => handleModify(data.id)}>수정</button>
            <button onClick={() => handleDelete(data.id)}>삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
};

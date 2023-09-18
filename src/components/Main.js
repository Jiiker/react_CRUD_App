import React, { useState } from "react";
import "./Main.css";
import { sendBtn } from "../icons/send.svg";
import { delBtn } from "../icons/trash-fill.svg";

export default function Main() {
  const [itemList, setItemList] = useState("");
  const [itemValue, setItemValue] = useState();
  const [expenditList, setExpenditList] = useState([]);

  const handleTextInput = (e) => {
    setItemList(e.target.value);
  }
  const handleMoneyInput = (e) => {
    setItemValue(parseInt(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = {
      id: Date.now(),
      item: itemList,
      money: itemValue
    };

    setExpenditList((prev) => [...prev, newList]);
    e.target["item"].value = "";
    setItemList("");
    e.target["money"].value = "";
    setItemValue(0);
  };

  const handleDelete = (id) => {
    let deletedList = expenditList.filter(data => data.id !== id);
    setExpenditList(deletedList);
  }

  return (
    <content className='content-box'>
      <form className='input-box' onSubmit={handleSubmit}>
        <div className='expenditure-items'>
          <div className='expenditure-items-title'>지출 항목</div>
          <input type='text' name='item' onChange={handleTextInput}/>
        </div>
        <div className='spending-money'>
          <div className='spending-money-title' onChange={handleMoneyInput}>비용</div>
          <input type='number' name='money' />
        </div>
        <input className="submitBtn" type='submit' />
      </form>
      {expenditList.map((data) => (
        <div className="list-box">
          <div>{data.item}</div>
          <div>{parseInt(data.money)}원</div>
          <button>수정</button>
          <button onClick={handleDelete(data.id)}>삭제</button>
        </div>
      ))}
      <button>
        목록 지우기
        <delBtn />
      </button>
    </content>
  );
}
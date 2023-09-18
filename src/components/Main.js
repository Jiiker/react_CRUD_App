import React, { useState } from "react";
import "./Main.css";
import { Lists } from "./Lists";

export default function Main({ expenditList, setExpenditList }) {
  const [itemList, setItemList] = useState("");
  const [itemValue, setItemValue] = useState();

  const handleTextInput = (e) => {
    setItemList(e.target.value);
  };
  const handleMoneyInput = (e) => {
    setItemValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newList = {
      id: Date.now(),
      item: itemList,
      money: itemValue,
    };

    setExpenditList((prev) => [...prev, newList]);
    e.target["item"].value = "";
    setItemList("");
    e.target["money"].value = "";
    setItemValue(0);
  };

  const handleDeleteAll = () => {
    setExpenditList([]);
  };

  return (
    <section className='content-box'>
      <form className='input-box' onSubmit={handleSubmit}>
        <div className='expenditure-items'>
          <div className='expenditure-items-title'>지출 항목</div>
          <input
            type='text'
            name='item'
            id='item-input'
            onChange={handleTextInput}
          />
        </div>
        <div className='spending-money'>
          <div className='spending-money-title'>비용</div>
          <input
            type='number'
            name='money'
            id='money-input'
            onChange={handleMoneyInput}
          />
        </div>
        <div>
          <input className='submitBtn' type='submit' />
        </div>
      </form>
      <Lists
        itemList={itemList}
        itemValue={itemValue}
        setItemList={setItemList}
        setItemValue={setItemValue}
        expenditList={expenditList}
        setExpenditList={setExpenditList}
      />
      <div>
        <button onClick={() => handleDeleteAll()}>목록 지우기</button>
      </div>
    </section>
  );
}

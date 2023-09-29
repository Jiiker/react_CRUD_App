import React, { useState } from "react";
import "./Main.css";
import { Lists } from "./Lists";

export default function Main({ expenditList, setExpenditList }) {
  const [itemList, setItemList] = useState("");
  const [itemValue, setItemValue] = useState();
  const [modifying, setModifying] = useState(false);
  const [id, setId] = useState("");

  const handleTextInput = (e) => {
    setItemList(e.target.value);
  };
  const handleMoneyInput = (e) => {
    setItemValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modifying === true) {
      const submitBtn = document.querySelector(".submitBtn");
      expenditList.filter((data) => {
        if (data.id === id) {
          data.item = e.target["item"].value;
          data.money = e.target["money"].value;
        }
        return data;
      });
      submitBtn.value = "제출";
      setModifying(false);
      setId("");
      e.target["item"].value = "";
      e.target["money"].value = "";
      return;
    }

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
          <button className='submitBtn' type='submit'>
            {modifying ? "수정" : "제출"}
          </button>
        </div>
      </form>
      <Lists
        itemList={itemList}
        itemValue={itemValue}
        setItemList={setItemList}
        setItemValue={setItemValue}
        expenditList={expenditList}
        setExpenditList={setExpenditList}
        modifying={modifying}
        setModifying={setModifying}
        id={id}
        setId={setId}
      />
      <div>
        <button onClick={() => handleDeleteAll()}>목록 지우기</button>
      </div>
    </section>
  );
}

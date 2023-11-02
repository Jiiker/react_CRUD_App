import React, { useState } from "react";
import "./Main.css";
import Lists from "./Lists";

export default function Main({
  expenditList,
  setExpenditList,
  expenditSum,
  setExpenditSum,
  handleAlert,
}) {
  const [itemList, setItemList] = useState("");
  const [itemValue, setItemValue] = useState(0);
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
          setExpenditSum(expenditSum + parseInt(data.money));
        }
        return data;
      });
      submitBtn.value = "제출";
      setModifying(false);
      setId("");
      e.target["item"].value = "";
      setItemList("");
      e.target["money"].value = "";
      setItemValue(0);
      handleAlert({ type: "success", text: "아이템이 수정되었습니다." });
      return;
    }

    let newList = {
      id: Date.now(),
      item: itemList,
      money: itemValue,
    };

    setExpenditSum(expenditSum + parseInt(newList.money));

    setExpenditList((prev) => [...prev, newList]);
    e.target["item"].value = "";
    setItemList("");
    e.target["money"].value = "";
    setItemValue(0);
    handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
  };

  const handleDeleteAll = () => {
    setExpenditList([]);
    setExpenditSum(0);
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다." });
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
        expenditSum={expenditSum}
        setExpenditSum={setExpenditSum}
        handleAlert={handleAlert}
      />
      <div>
        <button className='allDelBtn' onClick={() => handleDeleteAll()}>
          목록 지우기
        </button>
      </div>
    </section>
  );
}

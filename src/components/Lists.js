import React from "react";
import "./Lists.css";

const Lists = ({
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
  handleMakeSum,
  expenditSum,
  setExpenditSum,
  handleAlert,
}) => {
  const handleDelete = (id) => {
    expenditList.map((data) => {
      if (data.id === id) {
        setExpenditSum(expenditSum - parseInt(data.money));
      }
    });
    let deletedList = expenditList.filter((data) => data.id !== id);
    setExpenditList(deletedList);
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다." });
  };

  const handleModify = (id) => {
    expenditList.map((data) => {
      if (data.id === id) {
        setExpenditSum(expenditSum - parseInt(data.money));
      }
    });
    setModifying(true);
    setId(id);
  };

  return (
    <div>
      {expenditList.map((data) => (
        <div className='list-box' key={data.id}>
          <div className='list-box-contents'>
            <div class='list-box-item'>{data.item}</div>
            <div class='list-box-money'>{data.money}원</div>
          </div>
          <div className='list-buttons'>
            <button onClick={() => handleModify(data.id)}>수정</button>
            <button onClick={() => handleDelete(data.id)}>삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lists;

import React from "react";
import "../../style/Alarm/ModalCSS.scss";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ modalTogg, setModaltogg, data }) {
  modalTogg &&
    setTimeout(() => {
      setModaltogg(false);
    }, 30000);

  const modalData = new Date(data.timestamp - 9 * 60 * 60 * 1000);
  const modalObj = {
    hours: modalData.getHours(),
    minutes: modalData.getMinutes(),
  };

  return (
    <div className="Modal">
      <AiOutlineClose
        className="close"
        onClick={() => {
          setModaltogg(false);
        }}
      />
      <div className="inner">
        <h3>⏰</h3>
        <p>
          <span>{modalObj.hours}</span>시 <span>{modalObj.minutes}</span>분이
          되었습니다!
        </p>
        <p>해당 알림은 30초뒤 자동으로 사라져요!</p>
      </div>
    </div>
  );
}

export default Modal;

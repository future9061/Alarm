import React from "react";
import "../../style/Alarm/ModalCSS.scss";
import { AiOutlineClose } from "react-icons/ai";

//모달 관리하는 state
//close 클릭 시 false
//통신 성공시 받아온 데이터 바인딩 해서 true
function Modal(props) {
  return (
    <div className="Modal">
      <AiOutlineClose className="close" />
      <div className="inner">
        <p>시간이 되었습니다!</p>
      </div>
    </div>
  );
}

export default Modal;

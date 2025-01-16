import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #000;
  border-radius: 8px;
  padding: 30px;
  max-width: 700px;
  width: 90%;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    color: #fff;
  }

  p {
    text-align: center;
    color: #ccc;
    margin-bottom: 30px;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
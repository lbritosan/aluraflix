// import React from 'react';
// import styled from 'styled-components';
// import imagemLogo from './LogoMain.png';

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #141414;

//   .logo {
//     color: #00baff;
//     font-size: 24px;
//     font-weight: bold;
//   }

//   nav button {
//     background-color: #00baff;
//     border: none;
//     color: white;
//     padding: 10px 20px;
//     margin-left: 10px;
//     cursor: pointer;
//     border-radius: 4px;
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;

//     nav {
//       margin-top: 10px;
//       flex-direction: column;
//       gap: 10px;
//     }

//     a {
//       font-size: 14px;
//     }
//   }  
// `;

// function Header() {
//     return (
//         <HeaderContainer>
//           <div className="logo">
//             <img src={imagemLogo} alt='Logo' />
//           </div>
//           <nav>
//             <button>Home</button>
//             <button>Novo Vídeo</button>
//           </nav>
//         </HeaderContainer>
//       );
// }

import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal";
import NovoVideo from "../../pages/NovoVideo";
import imagemLogo from './LogoMain.png';

const HeaderContainer = styled.header`
  background-color: #000;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  h1 {
    font-size: 24px;
  }

  nav {
    display: flex;
    gap: 15px;

    button {
      background-color: #00baff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #008cba;
      }
    }
  }
`;

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <HeaderContainer>
        <div className="logo">
            <img src={imagemLogo} alt='Logo' />
        </div>
        <nav>
            <button>Home</button>
            <button onClick={openModal}>Novo Vídeo</button>
        </nav>
      </HeaderContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Novo Vídeo</h2>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
        <NovoVideo />
      </Modal>
    </>
  );
};


export default Header;
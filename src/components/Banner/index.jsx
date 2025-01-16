// // src/components/Banner.js
// import React from 'react';
// import styled from 'styled-components';

// const BannerContainer = styled.section`
//   background: url('https://via.placeholder.com/1200x400') no-repeat center center;
//   background-size: cover;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 20px;
//   color: white;

//   .category {
//     background-color: #00baff;
//     padding: 5px 10px;
//     display: inline-block;
//     border-radius: 4px;
//     font-size: 14px;
//   }

//   h1 {
//     font-size: 36px;
//     margin: 10px 0;
//   }

//   p {
//     font-size: 18px;
//     max-width: 600px;
//   }
// `;

// const Banner = () => {
//   return (
//     <BannerContainer>
//       <div className="category">Front End</div>
//       <h1>SEO com React</h1>
//       <p>
//         Aprenda a criar uma aplicação React otimizada para SEO com Next.js e deploy na Vercel!
//       </p>
//     </BannerContainer>
//   );
// };

// export default Banner;

import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  padding: 20px;
  color: #fff;
`;

const BannerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

const Highlight = styled.div`
  flex: 1;
  margin-right: 20px;
  text-align: left;

  button {
    background: #00b4d8;
    border: none;
    padding: 10px 20px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const VideoPreview = styled.div`
  flex: 1;
  iframe {
    width: 100%;
    height: 315px;
    border: none;
  }
`;

function Banner() {
  return (
    <BannerWrapper>
      <BannerContent>
        <Highlight>
          <button>FRONT END</button>
          <h2>SEO com React</h2>
          <p>
            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Next.js e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedéx"!
          </p>
        </Highlight>
        <VideoPreview>
          <iframe
            src="https://www.youtube.com/embed/ID_DO_VIDEO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </VideoPreview>
      </BannerContent>
    </BannerWrapper>
  );
}

export default Banner;



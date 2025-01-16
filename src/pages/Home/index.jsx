import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import CardsSection from '../../components/Cards';

const videos = {
  "frontend": [
    { title: 'SEO com React', image: 'https://via.placeholder.com/200x150' },
    { title: 'O que faz uma Dev Frontend', image: 'https://via.placeholder.com/200x150' },
  ],
  "backend": [
    { title: 'O que estudar para Backend?', image: 'https://via.placeholder.com/200x150' },
    { title: 'Github CLI', image: 'https://via.placeholder.com/200x150' },
  ],
  "mobile": [
    { title: 'Desenvolvimento Android', image: 'https://via.placeholder.com/200x150' },
    { title: 'React Native EU', image: 'https://via.placeholder.com/200x150' },
  ],
  "gestao": [
    { title: 'Gestão', image: 'https://via.placeholder.com/200x150' },
    { title: 'Gestão', image: 'https://via.placeholder.com/200x150' },
  ],
};

const categories = [
  {
    name: 'Frontend',
    color: '#FF5733',
    videos: [
      {
        title: 'Vídeo 1',
        thumbnail: 'https://via.placeholder.com/300x180',
      },
      {
        title: 'Vídeo 2',
        thumbnail: 'https://via.placeholder.com/300x180',
      },
    ],
  },
  {
    name: 'Backend',
    color: '#33FF57',
    videos: [
      {
        title: 'Vídeo A',
        thumbnail: 'https://via.placeholder.com/300x180',
      },
      {
        title: 'Vídeo B',
        thumbnail: 'https://via.placeholder.com/300x180',
      },
    ],
  },
  {
    name: 'Mobile',
    color: '#33FF57',
    videos: [
      {
        title: 'Vídeo A',
        thumbnail: 'https://via.placeholder.com/300x180',
      },
      {
        title: 'Vídeo B',
        thumbnail: 'https://via.placeholder.com/300x180',
      },
    ],
  },
  {
    name: 'Gestão',
    color: '#33FF57',
    videos: [
      {
        title: 'Vídeo A',
        thumbnail: 'https://via.placeholder.com/300x180',
      },
      {
        title: 'Vídeo B',
        thumbnail: 'https://via.placeholder.com/300x180',
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <CardsSection categories={categories} />
      <Footer />
    </>
  );
};

export default Home;
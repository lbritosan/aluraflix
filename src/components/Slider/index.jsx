// src/components/Slider.js
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  margin: 20px 0;

  h2 {
    color: ${(props) => props.color || '#fff'};
    margin-bottom: 10px;
  }

  .video-item {
    background-color: #141414;
    border-radius: 8px;
    overflow: hidden;
    padding: 10px;
    text-align: center;
    color: white;
  }

  img {
    max-width: 100%;
    border-radius: 4px;
  }
`;

const VideoSlider = ({ title, color, videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <SliderContainer color={color}>
      <h2>{title}</h2>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <img src={video.image} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export  default VideoSlider;
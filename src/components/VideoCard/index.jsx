import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h3 {
    font-size: 18px;
    color: #fff;
  }

  p {
    font-size: 14px;
    color: #aaa;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    button {
      background-color: #00baff;
      color: #fff;
      border: none;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #008cba;
      }

      &.delete {
        background-color: #ff5b5b;

        &:hover {
          background-color: #ff4040;
        }
      }
    }
  }
`;

const VideoCard = ({ video, onEdit, onDelete }) => {
  return (
    <CardContainer>
      <img src={video.image} alt={video.title} />
      <div className="content">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <div className="actions">
          <button onClick={() => onEdit(video)}>Editar</button>
          <button className="delete" onClick={() => onDelete(video.id)}>
            Excluir
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

export default VideoCard;
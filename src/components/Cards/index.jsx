import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Category = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const CategoryTitle = styled.h2`
  background-color: ${(props) => props.color || '#000'};
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 24px;
  margin-bottom: 15px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border: 2px solid ${(props) => props.color || '#fff'};
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: ${(props) => props.color || '#fff'};
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.color || '#000'};
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 5px;
  }
`;

const CardsSection = ({ categories }) => {
  return (
    <Section>
      {categories.map((category) => (
        <Category key={category.name}>
          <CategoryTitle color={category.color}>{category.name}</CategoryTitle>
          <CardGrid>
            {category.videos.map((video) => (
              <Card key={video.title} color={category.color}>
                <Thumbnail src={video.thumbnail} alt={video.title} />
                <CardContent>
                  <h3>{video.title}</h3>
                </CardContent>
                <CardButtons color={category.color}>
                  <Button color={category.color}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path d="M3 6h18v2H3z" fill="currentColor" />
                    </svg>
                    Deletar
                  </Button>
                  <Button color={category.color}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path d="M3 6h18v2H3z" fill="currentColor" />
                    </svg>
                    Editar
                  </Button>
                </CardButtons>
              </Card>
            ))}
          </CardGrid>
        </Category>
      ))}
    </Section>
  );
};

export default CardsSection;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const AttractionItem = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  color: #666;
  display: flex;
  justify-content: space-between;
`;

const AttractionImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
`;

const TouristAttractions = ({ data }) => {
  console.log(data);
  const attract = data;
  return (
    <Container>
      <Title>Tourist Attractions</Title>
      {data.map((it1) => {
        return (
          <AttractionItem>
            <AttractionImage
              src="https://img.freepik.com/free-vector/magical-fairytale-castle_23-2148469065.jpg?w=740&t=st=1690652187~exp=1690652787~hmac=6eea37f67ac4de5352cf0e8bb6a2a463b7f62a31a1bb2dd2b78555dbca0f5253"
              alt="Wonderland Castle"
            />
            {it1}
          </AttractionItem>
        );
      })}
    </Container>
  );
};

export default TouristAttractions;

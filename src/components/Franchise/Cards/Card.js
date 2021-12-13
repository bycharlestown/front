import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  border-radius: 9px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const TextWrapper = styled.div`
  padding: 5px 10px;
`;
const CardStyles = styled.div`
  width: 270px;
  height: 350px;
  transition: 0.3s;
  margin: 10px;
  border-radius: 10px;
  background-color: rgba(98, 178, 92, 0.3);
  box-shadow: 2px 2px 2px rgb(0 0 0 / 30%);
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;
const CardTitle = styled.h3`
  margin-bottom: 15px;
`;
const CardDescription = styled.p`
  margin-bottom: 10px;
`;
const CardPrice = styled.p``;
export const Card = () => (
  <CardStyles>
    <ImageWrapper>
      <Image src="https://www.anypics.ru/mini/201301/58435.jpg"></Image>
    </ImageWrapper>
    <TextWrapper>
      <CardTitle>Имя франшизы</CardTitle>
      <CardDescription>Описание описания в описании франшизы</CardDescription>
      <CardPrice>12 000 000 - 25 000 000</CardPrice>
    </TextWrapper>
  </CardStyles>
);

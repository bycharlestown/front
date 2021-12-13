import React from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar/Sidebar";
import { Card } from "./Cards/Card";

const FranchisesStyled = styled.section`
  display: flex;
  padding: 10px;
`;
const Cards = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;

export const Franchises = () => (
  <FranchisesStyled>
    <Sidebar />
    <Cards>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Cards>
  </FranchisesStyled>
);

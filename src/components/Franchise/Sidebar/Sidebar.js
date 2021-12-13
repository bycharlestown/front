import React from "react";
import styled from "styled-components";

const SidebarStyled = styled.div`
  width: 250px;
  flex-shrink: 0;
`;
const CountFranchise = styled.p`
  margin-bottom: 20px;
`;
const SearchPrice = styled.form`
  margin-bottom: 20px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none
  margin: 0
}
  
`;
const SearchText = styled.p`
  margin-bottom: 8px;
`;
const SearchInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 5px 10px;
  border: 1px solid black;
`;
const Sorting = styled.ul`
  margin-bottom: 50px;
`;
const SidebarItem = styled.li`
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: 1px solid #62b25c;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background-color: #62b25c;
  }
`;
const SortingText = styled.p`
  margin-bottom: 8px;
`;
const Category = styled.ul``;
export const Sidebar = () => (
  <SidebarStyled>
    <CountFranchise>Всего франшиз найдено: 1244</CountFranchise>
    <SearchPrice action="#">
      <SearchText>Инвестиции рублей:</SearchText>
      <SearchInput
        type="number"
        name="invest-form"
        placeholder="Минимальная цена"
      ></SearchInput>
      <SearchInput
        type="number"
        name="invest-form"
        placeholder="Максимальная цена"
      ></SearchInput>
    </SearchPrice>
    <Sorting>
      <SortingText>Сортировка</SortingText>
      <SidebarItem>Сначала новые</SidebarItem>
      <SidebarItem>По инвестициям ↑</SidebarItem>
      <SidebarItem>По инвестициям ↓</SidebarItem>
    </Sorting>
    <Category>
      <SidebarItem>Авто</SidebarItem>
      <SidebarItem>Детские франшизы</SidebarItem>
      <SidebarItem>Интернет и IT</SidebarItem>
      <SidebarItem>Медицина</SidebarItem>
      <SidebarItem>Образование и обучение</SidebarItem>
      <SidebarItem>Питание</SidebarItem>
      <SidebarItem>Отдых и развлечение</SidebarItem>
      <SidebarItem>Производство</SidebarItem>
      <SidebarItem>Розничная торговля</SidebarItem>
      <SidebarItem>Спорт, здоровье и красота</SidebarItem>
      <SidebarItem>Строительство</SidebarItem>
      <SidebarItem>Услуги для бизнеса (b2b)</SidebarItem>
      <SidebarItem>Услуги для населения</SidebarItem>
      <SidebarItem>Финансовые услуги</SidebarItem>
    </Category>
  </SidebarStyled>
);

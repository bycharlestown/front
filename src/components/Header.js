import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const HeaderStyled = styled.header`
  background-color: green;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
const Navigation = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavigationList = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  margin: 20px 10px;
  color: #fff;
  font-weight: 600;
`;
const LoginButton = styled.button`
  background-color: orange;
  color: #fff;
  font-weight: 600;
  padding: 10px 40px;
`;
export const Header = () => {
  return (
    <HeaderStyled>
      <Navigation>
        <NavigationList>
          <NavLink to="/franchise">
            <ListItem>Каталог франшиз</ListItem>
          </NavLink>
          <ListItem>Идеи для открытия бизнеса</ListItem>
          <ListItem>Бизнес планы</ListItem>
          <ListItem>Советы для успешного бизнеса</ListItem>
        </NavigationList>
        <Link to="/auth" className="button">
          <LoginButton>Войти</LoginButton>
        </Link>
      </Navigation>
    </HeaderStyled>
  );
};

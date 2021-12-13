import React, { useState } from "react";
import styled from "styled-components";
import { useHttp } from "../hooks/http.hook";

const AuthStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 255, 0, 0.7);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 200px;
  padding: 20px;
`;

const Header = styled.h2``;
const Input = styled.input`
  width: 90%;
`;
const SignIn = styled.button`
  background-color: green;
  padding: 10px 20px;
`;
const SignUp = styled.button`
  background-color: rgba(0, 255, 0, 0.8);
  padding: 10px 20px;
`;
export const ErrorMessage = styled.p`
  background-color: rgba(255, 0, 0, 0.8);
  padding: 10px;
`;
export const AuthPage = () => {
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });
  // Отправляет в хук данные из формы
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    clearError();
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log("Data: ", data);
    } catch (err) {}
  };
  return (
    <AuthStyled>
      <Form action="#">
        <Header>Войти или зарегестрироваться</Header>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          onChange={changeHandler}
        />
        <Input
          placeholder="Пароль"
          type="password"
          name="password"
          onChange={changeHandler}
        />
        <SignIn disabled={loading}>Войти</SignIn>
        <SignUp onClick={registerHandler} disabled={loading}>
          Зарегистрироваться
        </SignUp>
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </Form>
    </AuthStyled>
  );
};

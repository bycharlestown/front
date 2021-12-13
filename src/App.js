import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { Header } from "./components/Header";
const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: Montserrat,Arial,"Helvetica Neue",Helvetica,sans-serif;
}
*, *::before, *::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  color: #000000;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
h1, h2, h3,
h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
button {
  cursor: pointer;
  border: transparent;
}
img {
  max-width: 100%;
  height: auto;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
function App() {
  const routes = useRoutes(true); // значение зареган/не зареган
  return (
    <Router>
      <GlobalStyle />
      <Header></Header>
      {routes}
    </Router>
  );
}
export default App;

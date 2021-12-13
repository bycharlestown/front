import React from "react";
// Switch-Routes
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "./components/AuthPage";
import { Franchises } from "./components/Franchise/Franchises";
import { SecretPage } from "./components/SecretPage";

export const useRoutes = (isAuthorized) => {
  if (isAuthorized) {
    return (
      <Routes>
        <Route path="/secret" element={<SecretPage />} />
        <Route path="*" element={<Franchises />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<Franchises />} />
      <Route path="*" element={<Franchises />} />
    </Routes>
  );
};

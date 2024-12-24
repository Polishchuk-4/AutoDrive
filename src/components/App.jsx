import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../Pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../Pages/LoginPage/LoginPage"));
const UserPage = lazy(() => import("../Pages/UserPage/UserPage"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

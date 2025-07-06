import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Page/Login/LoginPage";
import HomePage from "./Page/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

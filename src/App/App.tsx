import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Page/Login/LoginPage";
import HomePage from "./Page/Home/Home";
import Layout from "./Layouts/Layout";
import "boxicons";
import MoviesPage from "./Page/Movies/movies";
import TvPage from "./Page/Tv/Tv";

function App() {
  return (
    <>
      <Routes>
        {/* Login page without navbar */}
        <Route path="/" element={<LoginPage />} />

        {/* Routes with navbar */}
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tvshows" element={<TvPage />} />
          {/* other nested routes */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

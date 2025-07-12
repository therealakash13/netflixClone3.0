import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Page/Login/LoginPage";
import HomePage from "./Page/Home/Home";
import Layout from "./Layouts/Layout";
import "boxicons";
import MoviesPage from "./Page/Movies/movies";
import TvPage from "./Page/Tv/Tv";
import NowPlayingPage from "./Page/NowPlaying/nowPlaying";
import PopularMoviesPage from "./Page/Popular/popularMovies";
import UpcomingPage from "./Page/Upcoming/upcoming";
import AboutPage from "./Page/About/about";

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
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/popular" element={<PopularMoviesPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* other nested routes */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

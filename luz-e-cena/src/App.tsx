import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Banner src="./banner.png" alt="Banner" />
            <MovieSection />
          </>
        }
      />
      <Route path="/filmes/:permalink" element={<MovieDetailsPage />} />
    </Routes>
  );
}

export default App;

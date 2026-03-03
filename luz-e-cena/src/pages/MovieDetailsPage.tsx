import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import MovieTemplate from "../components/MovieTemplate";
import { getMovieByPermalink } from "../api";
import { Movie } from "../types";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { permalink = "" } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getMovieByPermalink(permalink);

        if (!data) {
          setError("Filme não encontrado.");
          return;
        }

        setMovie(data);
      } catch (err) {
        setError("Erro ao buscar filme. Tente novamente.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [permalink]);

  return (
    <>
      <Header />
      <main>
        <section className={styles.container}>
          <Button onClick={() => navigate("/")}>Voltar</Button>
          {isLoading && <p>Carregando filme...</p>}
          {error && <p className={styles.error}>{error}</p>}
          {movie && <MovieTemplate movie={movie} />}
        </section>
      </main>
    </>
  );
};

export default MovieDetailsPage;
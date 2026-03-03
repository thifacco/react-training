import styles from "./MovieTemplate.module.css";
import Tag from "../Tag";
import { Movie } from "../../types";

interface MovieTemplateProps {
  movie: Movie;
}

const MovieTemplate = ({ movie }: MovieTemplateProps) => {
  return (
    <section className={styles.container}>
      <img src={movie.src} alt={movie.alt} className={styles.image} />
      <div className={styles.content}>
        <h1>{movie.titulo}</h1>

        <div className={styles.infoRow}>
          <span>Gênero</span>
          <strong>{movie.genero}</strong>
        </div>

        <div className={styles.infoRow}>
          <span>Categoria</span>
          <Tag value={movie.categoria} />
        </div>

        <div className={styles.infoRow}>
          <span>Duração</span>
          <strong>{movie.duracao} min</strong>
        </div>

        <div className={styles.infoRow}>
          <span>Censura</span>
          <Tag value={movie.censura} />
        </div>
      </div>
    </section>
  );
};

export default MovieTemplate;
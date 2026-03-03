import { useNavigate } from "react-router-dom";
import styles from "./CardMovie.module.css";
import Tag from "../Tag";
import { Movie } from "../../types";
import Button from "../Button";

const CardMovie = (props: Movie) => {
  const navigate = useNavigate();
  const { alt, src, titulo, genero, categoria, censura, duracao, permalink } =
    props;

  const handleViewMore = () => {
    navigate(`/filmes/${permalink}`);
  };

  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{titulo}</h3>
        <div className={styles.informacoes}>
          <div className={styles.linha1}>
            <p>{genero}</p>
            <Tag value={categoria} />
          </div>
          <div className={styles.linha2}>
            <p>{duracao}</p>
            <Tag value={censura} />
          </div>
        </div>
        <Button onClick={handleViewMore}>Veja mais</Button>
      </div>
    </li>
  );
};

export default CardMovie;

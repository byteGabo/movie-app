import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import placeholder from "../placeholder.png"
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
  const imageURL = getMovieImg(movie.poster_path, 300);
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageURL}
        alt={movie.title}
      />
      <div>
        <h3>{movie.title}</h3>
      </div>
      <div className={styles.stars}>
        <div className={styles.arg1}>
          <span className="material-symbols-rounded">star</span>
        </div>
        <div className={styles.arg2}>
          <p>{movie.vote_average}</p>
        </div>
      </div>
      </Link>
    </li>
  );
}

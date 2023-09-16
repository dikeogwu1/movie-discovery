import "../../syles/card.css";
import MDB from "../../assets/MDB.png";
import ROSE from "../../assets/Rose_fruit.png";
import { Link } from "react-router-dom";

function Card({
  poster_path,
  vote_average,
  vote_count,
  title,
  release_date,
  id,
}) {
  const votePercentage = Math.floor((vote_average / 10) * 100);

  return (
    <Link to={`/movie/${id}`} className='link'>
      <div className='movie' data-testid='movie-card'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className='movie_poster'
          data-testid='movie-poster'
        />
        <p data-testid='movie-release-date'>{`USA, ${release_date}`}</p>
        <h3 data-testid='movie-title' className='movie_title'>
          {title}
        </h3>
        <div className='movie_ratingBox'>
          <div className='movie_rating'>
            <img src={MDB} alt='MDB logo' /> <span>{vote_average}</span> /{" "}
            <span>{vote_count}</span>
          </div>
          <div className='movie_rating'>
            <img src={ROSE} alt='MDB logo' /> <span>{votePercentage}%</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Card;

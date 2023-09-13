import "../../../syles/movieList/movie.css";
import POSTER from "../../../assets/Poster_sm.png";

function Movie() {
  return (
    <div className='movie'>
      <div className='movie_posterBox'>
        <img src={POSTER} alt='movie poster' className='movie_poster' />
      </div>
      <p>USA, 2016 - Current</p>
    </div>
  );
}
export default Movie;

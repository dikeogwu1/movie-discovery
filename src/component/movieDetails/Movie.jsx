import "../../syles/movie.css";
import useFetch from "../../utils/useFetch";
import Loading from "../Loading";
import Description from "./descriptions";

function Movie({ id }) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const { loading, data, error } = useFetch(url);
  // console.log(data);

  if (loading) {
    return (
      <div className='movieDetails_loading'>
        <Loading />
      </div>
    );
  }
  if (error || data.length < 1) {
    return (
      <div className='movieDetails_loading'>
        <h2>Unable to fetch details</h2>
      </div>
    );
  }

  const movieRuntimeInMinutes = data.runtime;

  // Calculate the hours and minutes
  const hours = Math.floor(movieRuntimeInMinutes / 60);
  const minutes = movieRuntimeInMinutes % 60;

  // Create a formatted string
  const formattedRuntime = `${hours}h ${minutes}m`;

  return (
    <div className='movieDetails'>
      {/* movie poster */}
      <figure className='movieDetails_poster'>
        <div className='movieDetails_play'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1694692107/Icons/Play_fg7qwu.png'
            alt='play button'
          />
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt={data.title}
          data-testid='movie-poster'
        />
      </figure>
      {/* contents below movie poster */}
      <section className='movieDetails_content'>
        <div className='movieDetails_header'>
          <div className='movieDetails_item1'>
            {/* movie name, release date and runtime */}
            <div className='movieDetails_name'>
              <strong>{data.title} .</strong>
              <strong>{new Date(data.release_date).getFullYear()} .</strong>
              <strong>{formattedRuntime}</strong>
            </div>
            {/* movie genres */}
            <div className='movieDetails_genres'>
              {data.genres.map((genre) => {
                return <strong key={genre.id}>{genre.name}</strong>;
              })}
            </div>
          </div>
          {/* movie favorite */}
          <div className='movieDetails_favorite'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1694692107/Icons/Star_mnhmmi.png'
              alt='favorite icon'
            />
            <strong>
              <span className='movieDetails_average'>
                {parseFloat(data.vote_average.toFixed(1))}
              </span>{" "}
              | <span>{data.vote_count / 100}K</span>
            </strong>
          </div>
        </div>
        {/* movie descriptions */}
        <div className='movieDetails_body'>
          <Description {...data} params={id} />
        </div>
      </section>
    </div>
  );
}

export default Movie;

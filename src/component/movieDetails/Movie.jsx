import "../../syles/movie.css";
import useFetch from "../../utils/useFetch";
import Loading from "../Loading";
import Description from "./descriptions";

const key = "6b87cc14ea4c288700673a1053ad4fb6";

function Movie({ id }) {
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits`;

  const { loading, data, error } = useFetch(url);

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
        <iframe
          src={`https://www.themoviedb.org/video/play?key=${data.videos.results[0].key}`}
          data-testid='movie-poster'
          allowfullscreen
        ></iframe>
      </figure>
      {/* contents below movie poster */}
      <section className='movieDetails_content'>
        <div className='movieDetails_header'>
          <div className='movieDetails_item1'>
            {/* movie name, release date and runtime */}
            <div className='movieDetails_name'>
              <strong data-testid='movie-title'>{data.title} .</strong>
              <strong data-testid='movie-release-date'>
                {new Date(data.release_date).getFullYear()} .
              </strong>
              <strong data-testid='movie-runtime'>{formattedRuntime}</strong>
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

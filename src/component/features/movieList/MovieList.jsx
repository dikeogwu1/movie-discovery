import ArrowLeft from "../../svg/ArrowLeft";
import "../../../syles/movieList/movieList.css";
import Movie from "./Movie";

function MovieList() {
  return (
    <main className='movieList container'>
      <header className='movieList_header'>
        <h2>featured movie</h2>
        <button>
          see more <ArrowLeft />
        </button>
      </header>
      <div className='movieList_box'>
        <Movie />
      </div>
    </main>
  );
}

export default MovieList;

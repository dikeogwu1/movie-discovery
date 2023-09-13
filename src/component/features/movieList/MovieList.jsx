import ArrowLeft from "../../svg/ArrowLeft";
import "../../../syles/movieList.css";
import ListContainer from "./ListContainer";

function MovieList() {
  return (
    <main className='movieList container'>
      <header className='movieList_header'>
        <h2>featured movie</h2>
        <button>
          see more <ArrowLeft />
        </button>
      </header>

      <ListContainer />
    </main>
  );
}

export default MovieList;

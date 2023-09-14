import ArrowLeft from "../svg/ArrowLeft";
import "../../syles/featured.css";
import MoviesContainer from "./MoviesContainer";

function Featured() {
  return (
    <main className='movieList container'>
      <header className='movieList_header'>
        <h2>featured movie</h2>
        <button>
          see more <ArrowLeft />
        </button>
      </header>

      <MoviesContainer />
    </main>
  );
}

export default Featured;

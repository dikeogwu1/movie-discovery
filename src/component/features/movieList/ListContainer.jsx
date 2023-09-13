import useFetch from "../../../utils/useFetch";
import Loading from "../../Loading";
import "../../../syles/listContainer.css";
import Card from "./Card";

const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

function ListContainer() {
  const { loading, data, error } = useFetch(url);
  data.splice(10, 19);
  // loading state
  if (loading) {
    return (
      <div className='center'>
        <Loading />
      </div>
    );
  }
  // error state
  if (error) {
    return (
      <div className='center'>
        <h2>{error}</h2>
      </div>
    );
  }

  /* featured movies */
  return (
    <div className='listContainer'>
      {data.map((movie) => {
        return <Card {...movie} key={movie.id} />;
      })}
    </div>
  );
}
export default ListContainer;

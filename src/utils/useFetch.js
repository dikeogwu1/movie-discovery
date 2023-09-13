import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer, { ACTIONS } from "./reducer";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: ACTIONS.API_REQUEST });

    try {
      const res = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yjg3Y2MxNGVhNGMyODg3MDA2NzNhMTA1M2FkNGZiNiIsInN1YiI6IjY0ZmVlMWZlZTBjYTdmMDEwZGU5NjMzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.urHDSXIQZ9f8h2Ff7lF8RmzAmwTlLMEJOa64yj0C_Lw`,
        },
      });
      dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data.results });
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return state;
}
export default useFetch;

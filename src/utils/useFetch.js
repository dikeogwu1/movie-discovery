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
          Authorization: `Bearer ${
            import.meta.env.VITE_REACT_APP_ACCESS_TOKEN
          }`,
        },
      });
      dispatch({
        type: ACTIONS.FETCH_DATA,
        payload: res.data.results ? res.data.results : res.data,
      });
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

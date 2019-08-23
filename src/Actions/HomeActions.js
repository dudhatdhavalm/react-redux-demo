import axios from "axios";
import { GET_DATA, DATA_LOADING } from "./Types";

export const getData = () => {
  return dispatch => {
    dispatch(setDataLoading());
    axios
      .get("http://5d5bb7014311db0014982b7b.mockapi.io/api/v1/get-data")
      .then(res => {
        dispatch({ type: GET_DATA, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_DATA, payload: null });
      });
  };
};

export const setDataLoading = () => ({
  type: DATA_LOADING
});

import { GET_DATA, DATA_LOADING } from "../Actions/Types";

const initState = {
  data: [],
  isLoading: false
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload, isLoading: false };
    case DATA_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default homeReducer;

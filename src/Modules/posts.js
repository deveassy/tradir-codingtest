const LOAD_DATA = "LOAD_DATA";
const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
const LOAD_DATA_FAIL = "LOAD_DATA_FAIL";

export const loadData = () => {
  return {
    type: LOAD_DATA,
  };
};

export const loadDataSuccess = (data) => {
  return {
    type: LOAD_DATA_SUCCESS,
    data: data,
  };
};

export const loadDataFail = (error) => {
  return {
    type: LOAD_DATA_FAIL,
    error,
  };
};

const posts = (state = [], action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return [...action.data];
    case LOAD_DATA_FAIL:
      return [...state, action.error];
    default:
      return state;
  }
};

export default posts;

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS":
      return [...state, ...action.data];
    case "LOAD_DATA_FAIL":
      return [...state, action.error];
    default:
      return state;
  }
};

export default dataReducer;

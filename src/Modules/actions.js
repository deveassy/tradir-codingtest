const loadData = () => {
  return {
    type: "LOAD_DATA",
  };
};

const loadDataSuccess = (data) => {
  return {
    type: "LOAD_DATA_SUCCESS",
    data: data,
  };
};

const loadDataFail = (error) => {
  return {
    type: "LOAD_DATA_FAIL",
    error,
  };
};

const allActions = {
  loadData,
  loadDataSuccess,
  loadDataFail,
};

export default allActions;

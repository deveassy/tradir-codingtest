const REORDER_LIST = "REORDER_LIST";
const REORDER_LIST_UPDATE = "REORDER_LIST_UPDATE";

export const reorderList = () => {
  return {
    type: REORDER_LIST,
  };
};

export const reorderListUpdate = (id) => {
  return {
    type: REORDER_LIST_UPDATE,
    payload: id,
  };
};

const initialState = [
  { title: "List Num.", field: "id" },
  { title: "Name", field: "name" },
  { title: "ABV", field: "abv" },
  { title: "Tagline", field: "tagline" },
];

const reorder = (state = initialState, action) => {
  switch (action.type) {
    case REORDER_LIST_UPDATE:
      // let newHeaders = [];
      // order.forEach((i) => {
      //   newHeaders.push(tableHeaders[i]);
      // });
      // setState({ ...state, headers: newHeaders });
      return [state.filter((list) => list.id !== action.payload)];
    default:
      return state;
  }
};

export default reorder;

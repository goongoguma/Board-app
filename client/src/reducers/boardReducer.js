import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_BOARDS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_BOARD":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_BOARD":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_BOARD":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_BOARD":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

// )

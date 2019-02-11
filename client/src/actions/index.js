import api from "../api/api";
import history from "../history";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const createBoard = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await api.post("/boards", { ...formValues, userId });

    dispatch({ type: "CREATE_BOARD", payload: res.data });
    history.push("/");
  };
};

export const fetchBoards = () => {
  return async dispatch => {
    const res = await api.get("/boards");
    dispatch({ type: "FETCH_BOARDS", payload: res.data });
  };
};

export const fetchBoard = id => {
  return async dispatch => {
    const res = await api.get(`/boards/${id}`);

    dispatch({ type: "FETCH_BOARD", payload: res.data });
  };
};

export const editBoard = (id, formValues) => {
  return async dispatch => {
    const res = await api.patch(`/boards/${id}`, formValues);

    dispatch({ type: "EDIT_BOARD", payload: res.data });
    history.push("/");
  };
};

export const deleteBoard = id => {
  return async dispatch => {
    await api.delete(`/boards/${id}`);

    dispatch({ type: "DELETE_BOARD", payload: id });
    history.push("/");
  };
};

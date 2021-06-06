import axios from "axios";
import {
  GET_USER_INFOS_START,
  GET_USER_INFOS_ERROR,
  GET_USER_INFOS_SUCCES,
} from "../types/types";

export const getUserInfos = () => (dispatch) => {
  dispatch({ type: GET_USER_INFOS_START });
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>
      dispatch({ type: GET_USER_INFOS_SUCCES, payload: response.data })
    )
    .catch((error) => {
      dispatch({ type: GET_USER_INFOS_ERROR, payload: error });
    });
};

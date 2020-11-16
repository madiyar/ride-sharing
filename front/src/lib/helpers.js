import { DONE } from "store/constants";
import { SET_ERROR } from "store/helpers/constants";

export const getUserInitials = (firstName, lastName) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
};

export const createError = (e) => {
  console.log(e);
  return {
    type: SET_ERROR + DONE,
    payload: {
      status: e.response.status,
      message: e?.response?.data?.message
    }
  }
};
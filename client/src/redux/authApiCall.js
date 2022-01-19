import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

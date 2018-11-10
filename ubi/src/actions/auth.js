import { USER_LOGGED_IN, USER_SIGNED_UP, USER_LOGGED_OUT } from '../types';
import api from "../api";

// thunk action: a function that returns a function; dispatch: send data
export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
});

export const userSignUp = (signed_up) => ({
  type: USER_SIGNED_UP,
  signed_up
})

export const userLogOut = () => ({
  type: USER_LOGGED_OUT
})


//login action. return the user. send the user to redux
export const login = (credentials) => (dispatch) => api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

export const signup = (credentials) => (dispatch) => api.user.signup(credentials).then(signed_up => dispatch(userSignUp(signed_up)))

export const logout = (token) => (dispatch) => api.user.logout(token).then(() => dispatch(userLogOut()))
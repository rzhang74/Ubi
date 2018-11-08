import { USER_LOGGED_IN } from '../types';
import api from "../api";

export const userLoggedIn = (user) => ({

});

export const login = (credentials) => (dispatch) => api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
import { USER_LOGGED_IN, USER_SIGNED_UP, USER_LOGGED_OUT } from "../types";

const initialState = {
  token: '',
  logged_in: false,
  signed_up: false,
  username: ''
}

export default function user(state = initialState, action = {}){
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        token: action.user.token,
        username: action.user.username,
        logged_in: true
      }
    case USER_SIGNED_UP:
      return {
        ...state,
        signed_up: action.signed_up
      }
    case USER_LOGGED_OUT:
      return initialState; 
    default:
      return state;
  }
}

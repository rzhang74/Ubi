import { USER_LOGGED_IN, USER_SIGNED_UP, USER_LOGGED_OUT, GET_FOLLOWER, GET_FOLLOWING, GET_FEED } from "../types";

const initialState = {
  token: '',
  logged_in: false,
  signed_up: false,
  username: '',
  following: [],
  follower: [],
  feed: []
}

export default function user(state = initialState, action = {}){
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        token: action.user.token,
        username: action.user.username,
        uid: action.user.id,
        logged_in: true
      }
    case USER_SIGNED_UP:
      return {
        ...state,
        signed_up: action.signed_up
      }
    case USER_LOGGED_OUT:
      return initialState;
    case GET_FOLLOWER:
      return{
        ...state,
        follower: action.follower
      }
    case GET_FOLLOWING: 
      return{
        ...state,
        following: action.following
      }
    case GET_FEED:
    return{
      ...state,
      feed: action.feed
    }
    default:
      return state;
  }
}

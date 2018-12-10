import { GET_ANIME, GET_DANCING, GET_GAMING, GET_MOVIES, GET_MUSIC, WATCH_VIDEO, GET_VIDEOS,GET_PERSONAL_VIDEOS, GET_COMMENT} from "../types";

const initialState = {
  anime:[],
  dancing:[],
  gaming:[],
  movies:[],
  music:[],
  watch:{},
  videos:[],
  pvideos:[],
  comment:[]
}

export default function video(state = initialState, action = {}){
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...state,
        music: action.music
      }
    case GET_ANIME:
      return {
        ...state,
        anime: action.anime
      }
    case GET_GAMING:
      return {
        ...state,
        gaming: action.gaming
      }
    case GET_DANCING:
      return {
        ...state,
        dancing: action.dancing
      }
    case GET_MOVIES:
      return {
        ...state,
        movies: action.movies
      }
    case WATCH_VIDEO:
      // var key = action.watch.vid 
      // var value =  action.watch
      // var dict = state.watch
      // dict[key] = value
      return {
        ...state,
        watch: action.watch
      }
    case GET_VIDEOS:
      return{
        ...state,
        videos: action.videos
      }
    case GET_PERSONAL_VIDEOS:
      return{
        ...state,
        pvideos: action.pvideos
      }
    case GET_COMMENT:
      return{
        ...state,
        comment: action.comment
      }
    default:
      return state;
  }
}
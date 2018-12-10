import api from "../api";
import { GET_MUSIC, GET_ANIME, GET_GAMING, GET_DANCING, GET_MOVIES, WATCH_VIDEO, GET_FOLLOWER, GET_FOLLOWING, GET_VIDEOS, GET_PERSONAL_VIDEOS, GET_COMMENT, GET_FEED} from '../types'; 

export const userGetMusic = (music) => ({
    type: GET_MUSIC,
    music
});

export const userGetAnime = (anime) => ({
    type: GET_ANIME,
    anime
});

export const userGetGaming = (gaming) => ({
    type: GET_GAMING,
    gaming
});

export const userGetDancing = (dancing) => ({
    type: GET_DANCING,
    dancing
});

export const userGetMovies = (movies) => ({
    type: GET_MOVIES,
    movies
});

export const userWatchVideo = (watch) => ({
    type: WATCH_VIDEO,
    watch
})

export const userGetFollowing = (following) => ({
    type: GET_FOLLOWING,
    following
})

export const userGetFollower = (follower) => ({
    type: GET_FOLLOWER,
    follower
})

export const userGetVideos = (videos) => ({
    type: GET_VIDEOS,
    videos
})

export const userGetPersonalVideos = (pvideos) => ({
    type: GET_PERSONAL_VIDEOS,
    pvideos
})

export const userGetComment = (comment) => ({
    type: GET_COMMENT,
    comment
})

export const userGetFeed = (feed) => ({
    type: GET_FEED,
    feed
})

export const getMusic = () => (dispatch) => api.video.getMusic().then(music => dispatch(userGetMusic(music)));

export const getAnime = () => (dispatch) => api.video.getAnime().then(anime => dispatch(userGetAnime(anime)));

export const getDancing = () => (dispatch) => api.video.getDancing().then(dancing => dispatch(userGetDancing(dancing)));

export const getGaming = () => (dispatch) => api.video.getGaming().then(gaming => dispatch(userGetGaming(gaming)));

export const getMovies = () => (dispatch) => api.video.getMovies().then(movies => dispatch(userGetMovies(movies)));

export const watchVideo = (vid) => (dispatch) => api.video.watchVideo(vid).then(watch => dispatch(userWatchVideo(watch)))

export const getFollowing = (token) => (dispatch) => api.user.getFollowing(token).then(following => dispatch(userGetFollowing(following)))

export const getFollower = (token) => (dispatch) => api.user.getFollower(token).then(follower => dispatch(userGetFollower(follower)))

export const getVideos = ()  => (dispatch) => api.video.getVideos().then(videos => dispatch(userGetVideos(videos)));

export const getPersonalVideos = (uid)  => (dispatch) => api.video.getPersonalVideos(uid).then(videos => dispatch(userGetPersonalVideos(videos)));

export const getComment = (vid) =>  (dispatch) => api.video.getComment(vid).then(comment => dispatch(userGetComment(comment)));

export const getFeed = (token) =>  (dispatch) => api.user.getFeed(token).then(feed => dispatch(userGetFeed(feed)));
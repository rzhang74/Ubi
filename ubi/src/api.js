import axios from 'axios';

export default {
  user: {
    //url data header
    login: (credentials) => axios.post('http://localhost:8000/api/login', credentials, {headers: {'Content-Type': 'application/json'}}).then(res => res.data),

    signup: (credentials) => axios.post('http://localhost:8000/api/register', credentials, {headers: {'Content-Type': 'application/json'}}).then(res => true),

    logout: (token) => axios.post('http://localhost:8000/api/logout', {}, {headers: {'Content-Type': 'application/json', 'Authorization': 'Token ' + token}}), 
  
    follow: (token, id) => axios.post('http://localhost:8000/api/follow_by_id', {uid:id}, {headers: {'Content-Type': 'application/json', 'Authorization': 'Token ' + token}}),

    unfollow2: (token, id) => axios.post('http://localhost:8000/api/unfollow_by_id', {uid:id}, {headers: {'Content-Type': 'application/json', 'Authorization': 'Token ' + token}}),

    unfollow: (token, id) => axios({ method: 'post', url: 'http://localhost:8000/api/unfollow_by_id', data: {uid:id}, headers: {'Content-Type': 'application/json', 'Authorization': 'Token '+token}}),

    getFollowing: (token) => axios({ method: 'get', url: 'http://localhost:8000/api/get_following', headers: {'Content-Type': 'application/json', 'Authorization': 'Token '+token}}).then(res=>res.data),

    getFollower: (token) => axios({ method: 'get', url: 'http://localhost:8000/api/get_follower', headers: {'Content-Type': 'application/json', 'Authorization': 'Token '+token}}).then(res=>res.data),
  
    getFeed: (token) => axios({ method: 'get', url: 'http://localhost:8000/api/get_messages_by_user_id', headers: {'Content-Type': 'application/json', 'Authorization': 'Token '+token}}).then(res=>res.data),

    addFeed: (data, token) => axios({ method: 'post', url: 'http://localhost:8000/api/add_message', data: data, headers: {'Content-Type': 'application/json', 'Authorization': 'Token '+token}}),
  },

  video: {
    getMusic: () => axios.get('http://localhost:8000/api/get_videos?category=music', {}, {}).then(res=>res.data),

    getAnime: () => axios.get('http://localhost:8000/api/get_videos?category=anime', {}, {}).then(res=>res.data),

    getGaming: () => axios.get('http://localhost:8000/api/get_videos?category=gaming', {}, {}).then(res=>res.data),

    getDancing: () => axios.get('http://localhost:8000/api/get_videos?category=dancing', {}, {}).then(res=>res.data),

    getMovies: () => axios.get('http://localhost:8000/api/get_videos?category=movies', {}, {}).then(res=>res.data),

    watchVideo: (vid) => axios.get('http://localhost:8000/api/get_video_by_id?vid='+vid, {}, {}).then(res=>res.data),

    getVideos: () => axios.get('http://localhost:8000/api/get_videos_all', {}, {}).then(res=>res.data),

    getPersonalVideos: (uid) => axios.get('http://localhost:8000/api/get_videos_by_user_id?uid='+uid, {}, {}).then(res=>res.data),

    getComment: (vid) => axios.get('http://localhost:8000/api/get_comments?vid='+vid, {}, {}).then(res=>res.data),

    addComment: (credentials, token)  => axios.post('http://localhost:8000/api/add_comment', credentials, {headers: {'Content-Type': 'application/json', 'Authorization': 'Token '+ token}})
  }
}
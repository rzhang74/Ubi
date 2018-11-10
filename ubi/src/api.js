import axios from 'axios';


export default {
  user: {
    //url data header
    login: (credentials) => axios.post('http://localhost:8000/api/login', credentials, {headers: {'Content-Type': 'application/json'}}).then(res => res.data),

    signup: (credentials) => axios.post('http://localhost:8000/api/register', credentials, {headers: {'Content-Type': 'application/json'}}).then(res => true),

    logout: (token) => axios.post('http://localhost:8000/api/logout', {}, {headers: {'Content-Type': 'application/json', 'Authorization': 'Token ' + token}})
    
  }
}
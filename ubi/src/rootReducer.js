import { combineReducers } from 'redux';

import user from './reducers/user';
import video from './reducers/video';

export default combineReducers({
    user: user, 
    video: video
})

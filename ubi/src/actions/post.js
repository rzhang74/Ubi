import api from "../api";
import { FOLLOW, UNFOLLOW } from '../types';

export const userFollow = () => ({
    type: FOLLOW,
});

export const userUnfollow = () => ({
    type: UNFOLLOW,
});

export const follow =  api.user.follow()
export const unfollow = api.user.unfollow()

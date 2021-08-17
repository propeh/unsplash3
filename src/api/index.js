import axios from "axios";
import {request} from "../lib/request";

const API = {
    getPhotos: (data) => request('get', '/photos', data),
    getPhotoById: (id) => request('get', `/photos/${id}`),
    getPhotoRelated: (id) => request('get', `/photos/${id}/related`),
    getTopics: (data) => request('get', '/topics', data),
    getMe: () => request('get', '/me'),
    getToken: (data) => axios({
        method: 'post',
        url: 'https://unsplash.com/oauth/token',
        data
    }),
    searchPhotos: (data) => request('get', '/search', data),
}

export default API;
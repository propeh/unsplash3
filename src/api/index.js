import axios from "axios";
import {BASE_API_URL, CLIENT_ID} from "../common/constants";
import {getAccessToken} from "../lib/localStorageData";

const request = (method, url, data) => {

    const config = {
        method,
        url: BASE_API_URL + url
    }
    if (method === 'get') {
        config.params = data
    } else {
        config.data = data
    }

    const token = getAccessToken();
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : `Client-ID ${CLIENT_ID}`

    return axios(config);
}

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
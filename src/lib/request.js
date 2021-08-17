import {BASE_API_URL, CLIENT_ID} from "../common/constants";
import {getAccessToken} from "./localStorageData";
import axios from "axios";

export const request = async (method, url, data) => {
    try {
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

        const result = await axios(config);
        return result;

    } catch (e) {
        const errorCode = e.response.status;
        if(errorCode === 401) {
            console.log("401 권한없음")
        } else if(errorCode === 403) {
            console.log("403 초과")
        } else if(errorCode === 404) {
            console.log("404 페이지 없음")
        } else {
            console.log("잘못된 요청")
        }
        return e
    }
}
export const setAccessToken = (token) => {
    return window.localStorage.setItem('access_token', token);
}
export const getAccessToken = () => {
    return window.localStorage.getItem('access_token');
}
export const removeAccessToken = () => {
    return window.localStorage.removeItem('access_token');
}



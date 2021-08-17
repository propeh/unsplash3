export const setAccessToken = (token) => {
    return window.localStorage.setItem('access_token', token);
}
export const getAccessToken = () => {
    return window.localStorage.getItem('access_token');
}
export const removeAccessToken = () => {
    return window.localStorage.removeItem('access_token');
}

export const setRefreshToken = (token) => {
    return window.localStorage.setItem('refresh_token', token);
}
export const getRefreshToken = () => {
    return window.localStorage.getItem('Refresh_token');
}
export const removeRefreshToken = () => {
    return window.localStorage.removeItem('Refresh_token');
}




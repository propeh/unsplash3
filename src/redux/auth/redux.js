const initialState = {
    user: null
}

export const Action = {
    Types : {
        GET_TOKEN: 'GET_TOKEN',
        GET_REFRESH_TOKEN: 'GET_REFRESH_TOKEN',
        GET_ME: 'GET_ME',
        SET_USER: 'SET_USER',
    },

    Creators : {
        getToken: (payload) => ({
            type: Action.Types.GET_TOKEN,
            payload
        }),
        getRefreshToken: (payload) => ({
            type: Action.Types.GET_REFRESH_TOKEN,
            payload
        }),
        getMe: () => ({
            type: Action.Types.GET_ME,
        }),
        setUser: (payload) => ({
            type: Action.Types.SET_USER,
            payload
        })

    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        default: return state;
        case Action.Types.SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
    }
}

export default reducer;
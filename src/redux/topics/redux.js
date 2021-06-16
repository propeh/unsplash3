const initialState = {
    list: []
}

export const Action = {
    Types : {
        GET_TOPICS: 'TOPICS/GET_TOPICS',
        SET_TOPICS: 'TOPICS/SET_TOPICS',

    },

    Creators : {
        getTopics: (payload) => ({
            type: Action.Types.GET_TOPICS,
            payload
        }),
        setTopics: (payload) => ({
            type: Action.Types.SET_TOPICS,
            payload
        }),

    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        default: return state;
        case Action.Types.SET_TOPICS: {
            return {
                ...state,
                list: action.payload
            }
        }
    }
}

export default reducer;
const initialState = {
    list: [],
    photoById: {},
    photoRelated: {},
    photoPopup: false,
    photoDetailId: null,
}

export const Action = {
    Types : {
        UPDATE_STATE: 'PHOTOS/UPDATE_STATE',
        GET_PHOTOS: 'PHOTOS/GET_PHOTOS',
        SET_PHOTOS: 'PHOTOS/SET_PHOTOS',
        GET_PHOTO_BY_ID: 'PHOTOS/GET_PHOTO_BY_ID',
        SET_PHOTO_BY_ID: 'PHOTOS/SET_PHOTO_BY_ID',
        GET_PHOTO_RELATED: 'PHOTOS/GET_PHOTO_RELATED',
        SET_PHOTO_RELATED: 'PHOTOS/SET_PHOTO_RELATED',
        OPEN_PHOTO_POPUP: 'PHOTOS/OPEN_PHOTO_POPUP',
        GET_PHOTO_DETAIL: 'PHOTOS/GET_PHOTO_DETAIL',
    },

    Creators : {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props,
        }),
        getPhotos: (payload) => ({
            type: Action.Types.GET_PHOTOS,
            payload
        }),
        setPhotos: (payload) => ({
            type: Action.Types.SET_PHOTOS,
            payload
        }),
        getPhotoById: (id) => ({
            type: Action.Types.GET_PHOTO_BY_ID,
            id
        }),
        setPhotoById: (id, payload) => ({
            type: Action.Types.SET_PHOTO_BY_ID,
            id,
            payload
        }),
        getPhotoRelated: (id) => ({
            type: Action.Types.GET_PHOTO_RELATED,
            id
        }),
        setPhotoRelated: (id, payload) => ({
            type: Action.Types.SET_PHOTO_RELATED,
            id,
            payload
        }),
        openPhotoPopup: (id) => ({
            type: Action.Types.OPEN_PHOTO_POPUP,
            id
        }),
        getPhotoDetail: (id) => ({
            type: Action.Types.GET_PHOTO_DETAIL,
            id
        }),


    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_PHOTOS: {
            return {
                ...state,
                list: action.payload
            }
        }
        case Action.Types.SET_PHOTO_BY_ID: {
            return {
                ...state,
                photoById: {
                    ...state.photoById,
                    [action.id]: action.payload
                }
            }
        }
        case Action.Types.SET_PHOTO_RELATED: {
            return {
                ...state,
                photoRelated: {
                    ...state.photoRelated,
                    [action.id]: action.payload
                }
            }
        }

    }
}

export default reducer;
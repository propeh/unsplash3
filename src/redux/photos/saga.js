import {all, call, takeLatest, put, select} from 'redux-saga/effects';
import _ from 'lodash';
import {Action} from "./redux";
import API from "../../api";

const getPhotosWorker = function* ({payload}) {
    const result = yield call(API.getPhotos, payload)
    if(!_.isEmpty(result.data)) {
        yield put(Action.Creators.setPhotos(result.data))
    }
}

const getPhotoByIdWorker = function* ({id}) {
    try {
        const state = yield select();
        const storedPhotoById = state.photos.photoById[id];

        if(_.isEmpty(storedPhotoById)) {
            const result = yield call(API.getPhotoById, id);
            if(!_.isEmpty(result.data)) {
                yield put(Action.Creators.setPhotoById(id, result.data))
            }
        }

    } catch (e) {
        console.log(e)
    }
}

const getPhotoRelatedWorker = function* ({id}) {
    try {
        const state = yield select();
        const stateData = state.photos.photoRelated[id]

        if(_.isEmpty(stateData)) {
            const result = yield call(API.getPhotoRelated, id);
            if(!_.isEmpty(result.data)) {
                yield put(Action.Creators.setPhotoRelated(id, result.data));
            }
        }

    } catch (e) {
        console.log(e)
    }
}

const getPhotoDetailWorker = function* ({id}) {
    yield put(Action.Creators.getPhotoById(id));
    yield put(Action.Creators.getPhotoRelated(id));
    yield put(Action.Creators.updateState({
        photoDetailId: id
    }))
}

const openPhotoPopupWorker = function* ({id}) {
    yield put(Action.Creators.getPhotoDetail(id))
    yield put(Action.Creators.updateState({
        photoPopup: true
    }))
}

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, getPhotosWorker),
        takeLatest(Action.Types.GET_PHOTO_BY_ID, getPhotoByIdWorker),
        takeLatest(Action.Types.GET_PHOTO_RELATED, getPhotoRelatedWorker),
        takeLatest(Action.Types.GET_PHOTO_DETAIL, getPhotoDetailWorker),
        takeLatest(Action.Types.OPEN_PHOTO_POPUP, openPhotoPopupWorker),
    ])
}

export default saga;
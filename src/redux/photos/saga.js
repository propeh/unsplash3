import {all, call, takeLatest, put, select} from 'redux-saga/effects';
import _ from 'lodash';
import 'react-toastify/dist/ReactToastify.css';
import {Action} from "./redux";
import API from "../../api";
import {apiSaga} from "../api/saga";
import {toast} from "react-toastify";



const getPhotosWorker = function* ({payload}) {
    try {
        const result = yield call(apiSaga, API.getPhotos, payload);
        if(!_.isEmpty(result.data)) {
            toast("이미지 로드 완료")
            const {photos} = yield select();
            yield put(Action.Creators.setPhotos([
                ...photos.list,
                ...result.data
            ]))
        }
    } catch (e) {
        toast("이미지가 존재하지 않습니다.")
        console.log(e)
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
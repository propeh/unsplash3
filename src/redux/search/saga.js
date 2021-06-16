import {takeLatest, call, put} from "redux-saga/effects";
import _ from 'lodash';
import {Action} from "./redux";
import API from "../../api";

const searchPhotosWorker = function* ({payload}) {
    const result = yield call(API.searchPhotos, payload);
    if(!_.isEmpty(result.data)) {
        yield put(Action.Creators.setSearchResults(result.data))
    } else {
        // 에러처리
    }
}

const sagas = function* () {
    yield takeLatest(Action.Types.SEARCH_PHOTOS, searchPhotosWorker)
}

export default sagas;
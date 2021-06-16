import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_TOPICS, function* ({payload}) {
            const result = yield call(API.getTopics, payload)
            if(result.data) {
                yield put(Action.Creators.setTopics(result.data))
            }
        })
    ])
}

export default saga;
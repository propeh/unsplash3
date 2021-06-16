import {takeLatest, all, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";
import history from "../../lib/history";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_TOKEN, function* ({payload}) {
            const result = yield call(API.getToken, payload);
            console.log("result", result)

            window.localStorage.setItem("access_token", result.data.access_token)
            window.localStorage.setItem("refresh_token", result.data.refresh_token)
            history.push('/')
        }),

        takeLatest(Action.Types.GET_ME, function* () {
            const result = yield call(API.getMe);
            console.log('me', result.data)
            if (result.data) {
                yield put(Action.Creators.setUser(result.data))
            }
        })
    ])
}

export default saga;
import {takeLatest, all, call, put} from 'redux-saga/effects';
import _ from 'lodash';
import {Action} from "./redux";
import API from "../../api";
import history from "../../lib/history";
import {getRefreshToken, setAccessToken, setRefreshToken} from "../../lib/localStorageData";
import {apiSaga} from "../api/saga";

const getTokenWorker = function* ({payload}) {
    try {
        const result = yield call(apiSaga, API.getToken, payload);

        setAccessToken(result.data.access_token);
        setRefreshToken(result.data.refresh_token);
        history.push('/');
    } catch (e) {
        console.log(e);
    }
}

const getRefreshWorker = function* ({payload}) {
    try {
        const refreshToken = getRefreshToken();
        console.log("refreshToken", refreshToken)
        // unsplash 에서 refresh 토큰 사용에 대한 문서가 없어서 실제 구현은 해보지 않고
        // 아래와 같은 형태로 처리한다고 정리만..
        const result = yield call(API.refresh, {token: refreshToken})
        if(!_.isEmpty(result.data)) {
            setAccessToken(result.data.access_token);
            setRefreshToken(result.data.refresh_token);
        }
    } catch (e) {
        console.log(e);
    }
}

const getMeWorker = function* () {
    try {
        const result = yield call(apiSaga, API.getMe);
        console.log(result.data)
        if (result.data) {
            yield put(Action.Creators.setUser(result.data))
        }
    } catch (e) {
        console.log(e)
    }
}

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_TOKEN, getTokenWorker),
        takeLatest(Action.Types.GET_REFRESH_TOKEN, getRefreshWorker),
        takeLatest(Action.Types.GET_ME, getMeWorker)
    ])
}

export default saga;
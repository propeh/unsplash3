import {call, put} from "redux-saga/effects";
import {toast} from "react-toastify";
import {Action} from "../auth/redux";

export const apiSaga = function* (api, payload) {
    const result = yield call(api, payload);

    if (result.response?.status > 400) {
        const ErrorCode = result?.response?.status;
        if(ErrorCode === 401) {
            yield put(Action.Creators.getRefreshToken())
        } else if(ErrorCode === 403) {
            toast("403")
        } else {
            toast("404")
        }
    }

    return result;
}
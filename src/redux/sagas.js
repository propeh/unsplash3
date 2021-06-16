import {all, fork} from 'redux-saga/effects';

import appSaga from './app/saga';
import photosSaga from './photos/saga';
import searchSaga from './search/saga';
import topicsSaga from './topics/saga';
import authSaga from './auth/saga';

const sagas = function* () {
    yield all([
        fork(appSaga),
        fork(photosSaga),
        fork(searchSaga),
        fork(topicsSaga),
        fork(authSaga),
    ])
}

export default sagas;
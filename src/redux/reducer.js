import {combineReducers} from 'redux';

import appReducer from './app/redux';
import photosReducer from './photos/redux';
import searchReducer from './search/redux';
import topicsReducer from './topics/redux';
import authReducer from './auth/redux';

const reducer = combineReducers({
    app: appReducer,
    photos: photosReducer,
    search: searchReducer,
    topics: topicsReducer,
    auth: authReducer
});

export default reducer;
import { combineReducers } from 'redux';
import {
    persistReducer
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import bookmarksReducer from './bookmarks.reducer';




const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    // Add your reducers here
    bookmarks: bookmarksReducer
});

export default persistReducer(persistConfig, rootReducer);
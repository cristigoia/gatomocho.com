import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import postReducer from './reducers/post';
import pagesReducer from './reducers/pages';
import messageReducer from './reducers/messages';

const reducer = combineReducers({
    post: postReducer,
    page: pagesReducer,
    message: messageReducer
});

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import postReducer from './reducers/post';
import messageReducer from './reducers/messages';

const reducer = combineReducers({
    post: postReducer,
    message: messageReducer
});

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

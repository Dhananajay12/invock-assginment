import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userProfileReducer from './githubRedux/GitReducer';

export const Store = createStore(
	userProfileReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

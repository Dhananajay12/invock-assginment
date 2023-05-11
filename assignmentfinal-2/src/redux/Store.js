import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import partyReducer from './githubRedux/PartyReducer';

export const Store = createStore(
	partyReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

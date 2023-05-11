
import { FETCH_SUCCESS, SET_BALANCE, SET_PARTIES } from '../constants';

export const fetchUserSuccessUserProfile = (userData) => ({
	type: FETCH_SUCCESS,
	userData,
});

export const setParties = (parties) => ({
	type: SET_PARTIES,
	parties,
});

export const setBalance = (balance) => ({
	type: SET_BALANCE,
	balance,
});

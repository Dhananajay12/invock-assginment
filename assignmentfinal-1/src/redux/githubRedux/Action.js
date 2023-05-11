// import axios from 'axios';
/* eslint linebreak-style: ["error", "windows"] */
import { FETCH_SUCCESS } from '../constants';

export const fetchUserSuccessUserProfile = (userData) => ({
	type: FETCH_SUCCESS,
	userData,
});

export const fetchUser = (username) => {
	return (dispatch, getState) => {
		if (getState().user && getState().user.username === username) {
			return;
		}

		return fetch(`http://api.github.com/users/${username}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				dispatch(fetchUserSuccessUserProfile(data));
			})
			.catch(error => {
				console.log(error);
			});

		// axios.get(`http://api.github.com/users/${username}`)
		// 	.then(data => {
		// 		dispatch(fetchUserSuccessUserProfile(data));
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});
	};
};

import { FETCH_SUCCESS } from "../constants";

const INIT_STATE = {
	userProfile: {},
};

const userProfileReducer = (state = INIT_STATE, action) => {
	console.log(action.type, action)
	switch (action.type) {
		case FETCH_SUCCESS:
			return {
				...state,
				userProfile: action.userData,
			};
		default:
			return state;
	}
};

export default userProfileReducer;
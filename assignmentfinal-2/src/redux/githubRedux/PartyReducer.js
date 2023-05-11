import { SET_BALANCE, SET_PARTIES } from "../constants";


const INIT_STATE = {
	parties: [],
	balance: [],
};

const PartyReducer = (state = INIT_STATE, action) => {
	console.log(action.type, action)
	switch (action.type) {
		case SET_PARTIES:
			return {
				...state,
				parties: action.parties,
			};
		case SET_BALANCE:
			return {
				...state,
				balance: action.balance,
			};
		default:
			return state;
	}
};

export default PartyReducer;
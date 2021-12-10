/* eslint-disable import/no-anonymous-default-export */
import { GET_API_DATA } from '../actionType/ActionType';

var initialState = {};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_API_DATA:
			return {
				...state,
				apiDatList: action.payload,
			};

		default:
			return state;
	}
};

export default homeReducer;

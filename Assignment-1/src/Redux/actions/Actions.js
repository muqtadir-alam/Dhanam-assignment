import axios from 'axios';

import { GET_API_DATA } from '../actionType/ActionType';

const url = 'https://www.gov.uk/bank-holidays.json ';

export const getdata = () => dispatch => {
	// dispatch(setLoading(true));

	axios
		.get(`${url}`)
		.then(res => {
			dispatch({
				type: GET_API_DATA,
				payload: res?.data,
			});
			console.log(res);
		})
		.catch(err => console.log(err));
};

import axios from 'axios';

import { baseUrlFormatter } from '.';

export const postCronfig = async (payload: any) => {
	try {
		return await axios
			.post(baseUrlFormatter(`/cronfig`), payload)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	} catch (error) {
		return error;
	}
};

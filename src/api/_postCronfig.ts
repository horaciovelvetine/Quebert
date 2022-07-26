import axios from 'axios';

import { baseUrlFormatter } from '.';

interface POST_CRONFIG_RESPONSE {
	message: string;
}

export const postCronfig = async (payload: any): Promise<POST_CRONFIG_RESPONSE> => {
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

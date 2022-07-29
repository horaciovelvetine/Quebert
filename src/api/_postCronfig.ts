import axios from 'axios';

import { baseUrlFormatter } from '.';
import { CRONFIG, defaultCronfig } from '../interfaces/_cronfig';
import { handleAPIError } from './_handleAPIError';

interface POST_CRONFIG_RESPONSE {
	success: boolean;
	message: string;
	cronfig: CRONFIG;
}

export const postCronfig = async (payload: CRONFIG): Promise<POST_CRONFIG_RESPONSE> => {
	return await axios
		.post(baseUrlFormatter(`/cronfig`), payload)
		.then((response) => {
			return { success: true, message: response.data.message, cronfig: response.data.cronfig };
		})
		.catch((error) => {
			// returns default 15 minute cronfig default if error
			handleAPIError(error);
			return { success: false, message: error, cronfig: defaultCronfig };
		});
};

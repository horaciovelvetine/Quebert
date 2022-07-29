import axios from 'axios';

import { baseUrlFormatter } from '.';
import { CRONFIG, defaultCronfig } from '../interfaces';
import { handleAPIError } from './_handleAPIError';

interface CURRENT_CRONFIG_RESPONSE {
	success: boolean;
	message: string;
	payload: {
		cronfig: CRONFIG;
		error: any;
	};
}

export const getCurrentCronfig = async (): Promise<CURRENT_CRONFIG_RESPONSE> => {
	return await axios
		.get(baseUrlFormatter(`/cronfig`))
		.then((response) => {
			return { success: true, ...structuredClone(response.data) };
		})
		.catch((error) => {
			return { success: false, message: handleAPIError(error), payload: { cronfig: defaultCronfig } };
		});
};

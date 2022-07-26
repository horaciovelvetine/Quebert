import axios from 'axios';

import { baseUrlFormatter } from '.';

interface CURRENT_CRONFIG_RESPONSE {
	message: string;
	payload: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		runImmediately: boolean;
	}
}

export const getCurrentCronfig = async (): Promise<CURRENT_CRONFIG_RESPONSE> => {
	try {
		return await axios
			.get(baseUrlFormatter(`/cronfig`))
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

import axios from 'axios';

import { baseUrlFormatter } from '.';
import type { CurrentCronfigResInt } from '../interfaces';

export const getCurrentCronfig = async (): Promise<CurrentCronfigResInt> => {
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

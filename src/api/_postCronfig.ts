import axios from 'axios';

import { baseUrlFormatter } from '.';
import type { CronfigResInt } from '../interfaces/api/_CronfigResInt';

export const postCronfig = async (payload: any): Promise<CronfigResInt> => {
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

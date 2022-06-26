import axios from 'axios';

import { baseUrlFormatter } from '.';
import type { APIResponseInt } from '../interfaces';

export const postSlashCommand = async (payload: any): Promise<APIResponseInt> => {
	try {
		return await axios
			.post(baseUrlFormatter(`/slash-command`), payload)
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

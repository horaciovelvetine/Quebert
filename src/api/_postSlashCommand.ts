import axios from 'axios';

import { baseUrlFormatter } from '.';

export const postSlashCommand = async (payload: any) => {
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

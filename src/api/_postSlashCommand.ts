import axios from 'axios';

import { baseUrlFormatter } from '.';
import { handleAPIError } from './_handleAPIError';

interface POST_SLASH_COMMAND_RESPONSE {
	success: boolean;
	message: string;
	payload: {
		error?: any;
		total_queued?: string;
	};
}

export const postSlashCommand = async (payload: any): Promise<POST_SLASH_COMMAND_RESPONSE> => {
	return await axios
		.post(baseUrlFormatter(`/slash-command`), payload)
		.then((response) => {
			let data = { success: true, ...structuredClone(response.data) };
			return data;
		})
		.catch((error) => {
			handleAPIError(error);
			let data = { success: false, ...handleAPIError(error) };
			return data;
		});
};

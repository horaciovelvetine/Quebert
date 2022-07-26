import axios from 'axios';

import { baseUrlFormatter } from '.';
import type { POST } from '../interfaces';

interface POST_SLASH_COMMAND_RESPONSE {
	message: string;
	payload: {
		posts?: POST[];
		time_of_last?: string;
		time_to_next?: string;
		total_queued?: string;
	};
}

export const postSlashCommand = async (payload: any): Promise<POST_SLASH_COMMAND_RESPONSE> => {
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

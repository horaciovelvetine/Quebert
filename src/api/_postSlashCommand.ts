import axios from 'axios';

import { baseUrlFormatter } from '.';
import type { SlashCommandRequestInt } from '../interfaces';

export const postSlashCommand = async ({ command, payload }: SlashCommandRequestInt) => {
	try {
		return await axios
			.post(baseUrlFormatter(`/slash-command/${command}`), payload)
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

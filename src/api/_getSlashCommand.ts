import axios from 'axios';

import { baseUrlFormatter } from '.';
import type { SlashCommandRequestInt } from '../interfaces';

export const getSlashCommand = async ({ command }: SlashCommandRequestInt) => {
	try {
		return await axios
			.get(baseUrlFormatter(`/slash-command/${command}`))
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

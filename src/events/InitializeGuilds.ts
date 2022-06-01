import axios from 'axios';
import type { Collection, TextChannel } from 'discord.js';
import { requestUrl } from '../utils/_index';

export const InitializeGuilds = async (guilds: Collection<string, TextChannel>) => {
	try {
		let response = await axios
			.post(requestUrl('init-guilds'), guilds.toJSON())
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

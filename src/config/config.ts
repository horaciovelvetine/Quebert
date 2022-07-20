import 'dotenv/config';
import type { ClientOptions } from 'discord.js';

export default {
	token: process.env.DISCORD_TOKEN!,
	client: process.env.CLIENT_ID!,
	guild: process.env.GUILD_ID!,
	mod: process.env.MOD_ONLY!,
	baseUrl: process.env.BASE_URL!,
	devUrl: process.env.DEV_URL!,
};

export const clientDetails = (): ClientOptions => {
	return {
		intents: ['GUILDS', 'GUILD_MESSAGES'],
		presence: {
			status: 'online',
			activities: [
				{
					name: ``, //sets activity in sidebar
					type: 'LISTENING',
				},
			],
		},
	};
};

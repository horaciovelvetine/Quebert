import type { TextChannel, Client } from 'discord.js';
import config from '../../config/config';
const { mod } = config;

export function getModOnlyFromClient(client: Client) {
	return client.channels.cache.get(mod) as unknown as TextChannel;
}

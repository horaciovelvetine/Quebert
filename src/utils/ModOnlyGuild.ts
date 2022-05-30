import config from './dev/config';
import type { CommandInteraction } from 'discord.js';

let { mod } = config;

export const ModOnlyGuild = (interaction: CommandInteraction) => {
	let chan = interaction.client.channels.cache.get(mod)!;

	if (chan.isText()) {
		return chan;
	}
	//TODO This is a clunky solution for this. Need to keep moving already 2+ hours this is the best solution so far
	console.log('Channel found is not of the text type');
};

import config from '../dev/config';
import type { CommandInteraction, TextChannel } from 'discord.js';

let { mod } = config;

export const ModOnlyGuild = (interaction: CommandInteraction) => {
	return interaction.client.channels.cache.get(mod) as unknown as TextChannel;
};

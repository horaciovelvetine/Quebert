import config from '../config/config';
import type { CommandInteraction, TextChannel } from 'discord.js';

let { mod } = config;

export const modOnlyGuild = (interaction: CommandInteraction) => {
	return interaction.client.channels.cache.get(mod) as unknown as TextChannel;
};

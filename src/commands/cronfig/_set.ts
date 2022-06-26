import { SlashCommandBuilder } from '@discordjs/builders';
import type { CommandInteraction } from 'discord.js';

import type { SlashCommandInt } from '../../interfaces';

export const setCronfig: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('set-interval')
		.setDescription('Change the current interval Quebert waits between posts')
		.addStringOption((opt) => opt.setName('days').setDescription('# of days'))
		.addStringOption((opt) => opt.setName('hours').setDescription('# of hours'))
		.addStringOption((opt) => opt.setName('minutes').setDescription('# of minutes'))
		.addStringOption((opt) => opt.setName('seconds').setDescription('# of seconds')),
	run: async (interaction: CommandInteraction) => {
		await interaction.reply({ content: 'set-interval', ephemeral: true });
	},
};

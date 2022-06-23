import { SlashCommandBuilder } from '@discordjs/builders';
import type { CommandInteraction } from 'discord.js';

import type { SlashCommandInt } from '../../interfaces';

export const setInterval: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('set-interval')
		.setDescription('Change the current interval Quebert waits between posts')
		.addStringOption((opt) => opt.setName('hours').setDescription('time in Hours'))
		.addStringOption((opt) => opt.setName('minutes').setDescription('time in Minutes')),
	run: async (interaction: CommandInteraction) => {
		await interaction.reply({ content: 'set-interval', ephemeral: true });
	},
};

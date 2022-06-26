import { SlashCommandBuilder } from '@discordjs/builders';
import type { CommandInteraction } from 'discord.js';

import type { SlashCommandInt } from '../../interfaces';

export const currentCronfig: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('current-interval')
		.setDescription('Display the current interval Quebert waits between posts'),
	run: async (interaction: CommandInteraction) => {
		await interaction.reply({ content: 'set-interval', ephemeral: true });
	},
};

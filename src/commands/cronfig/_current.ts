import { SlashCommandBuilder } from '@discordjs/builders';
import { getCurrentCronfig } from '../../api';

import type { SlashCommandInt } from '../../interfaces';

export const currentCronfig: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('current-interval')
		.setDescription('The current interval Quebert waits between posts'),
	run: async (interaction) => {
		const response = await getCurrentCronfig();
		interaction.reply({ content: `${response.message}`, ephemeral: true });
	},
};

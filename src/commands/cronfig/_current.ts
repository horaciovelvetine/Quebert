import { SlashCommandBuilder } from '@discordjs/builders';
import { getCurrentCronfig } from '../../api';

import type { SLASH_COMMAND } from '../../interfaces';

export const currentCronfig: SLASH_COMMAND = {
	data: new SlashCommandBuilder()
		.setName('current-interval')
		.setDescription('The current interval Quebert waits between posts'),
	run: async (interaction) => {
		const response = await getCurrentCronfig();
		interaction.reply({ content: `${response.message}`, ephemeral: true });
	},
};

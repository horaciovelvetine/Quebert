// external lib
import { SlashCommandBuilder } from '@discordjs/builders';

// lib
import { getCurrentCronfig } from '../../api';
import type { SLASH_COMMAND } from '../../interfaces';

export const checkCronfig: SLASH_COMMAND = {
	data: new SlashCommandBuilder()
		.setName('check-cronfig')
		.setDescription('Check the amount of time Quebert waits between executing the Que Routine (sending posts)'),
	run: async (interaction) => {
		const response = await getCurrentCronfig();

		if (response.success) {
			return await interaction.reply({ content: `${response.message}`, ephemeral: true });
		}
    // 
		return await interaction.reply({ content: response.payload.error, ephemeral: true });
	},
};

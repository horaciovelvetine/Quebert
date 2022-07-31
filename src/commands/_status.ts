import { SlashCommandBuilder } from '@discordjs/builders';

import { postSlashCommand } from '../api';
import { statusEmbed } from '../messages';
import type { SLASH_COMMAND } from '../interfaces';

export const status: SLASH_COMMAND = {
	data: new SlashCommandBuilder().setName('status').setDescription(`Ask Quebert how it's going`),
	run: async (interaction, queScheduler) => {
		// Get the current queue length from API
		let response = await postSlashCommand({ command: 'status', payload: 'default' });

		//error catching
		if (!response.success) {
			interaction.reply({ content: response.payload.error, ephemeral: true });
			return;
		}
		let queRoutineStatus = queScheduler.getById('QueRoutine').getStatus();

		return await interaction.reply({
			embeds: [statusEmbed({ interaction, queued: response.payload.total_queued! })],
			ephemeral: true,
			content: `Que Routine is currently: ${queRoutineStatus}`,
		});
	},
};

import { SlashCommandBuilder } from '@discordjs/builders';

import { postSlashCommand } from '../api';
import { statusEmbed } from '../messages';
import type { SLASH_COMMAND } from '../interfaces';

export const status: SLASH_COMMAND = {
	data: new SlashCommandBuilder().setName('status').setDescription(`Ask Quebert how it's going`),
	run: async (interaction, queScheduler) => {
		let statusResponse = await postSlashCommand({ command: 'status', payload: 'default' });
		let queRoutineStatus = queScheduler.getById('QueRoutine').getStatus();
		let modEmbedPreview = statusEmbed(interaction, statusResponse);
		await interaction.reply({
			embeds: [modEmbedPreview],
			ephemeral: true,
			content: `Que Routine is currently: ${queRoutineStatus}`,
		});
	},
};

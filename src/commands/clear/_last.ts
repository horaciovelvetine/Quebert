import { SlashCommandBuilder } from '@discordjs/builders';
import { postSlashCommand } from '../../api';

import type { SLASH_COMMAND } from '../../interfaces';

export const clearLast: SLASH_COMMAND = {
	data: new SlashCommandBuilder().setName('clear-last').setDescription('Clear the last post from the queue.'),
	run: async (interaction) => {
		let clearResponse = await postSlashCommand({ command: 'clear', payload: 'last' });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

import { SlashCommandBuilder } from '@discordjs/builders';
import { postSlashCommand } from '../../api';

import type { SlashCommandInt } from '../../interfaces';

export const clearLast: SlashCommandInt = {
	data: new SlashCommandBuilder().setName('clear-last').setDescription('Clear the last post from the queue.'),
	run: async (interaction) => {
		let clearResponse = await postSlashCommand({ command: 'clear', payload: 'last' });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

import { SlashCommandBuilder } from '@discordjs/builders';
import { postSlashCommand } from '../../api';
import type { SLASH_COMMAND } from '../../interfaces';

export const removeLastPost: SLASH_COMMAND = {
	data: new SlashCommandBuilder().setName('remove-last-post').setDescription('Clear the last post added to the queue.'),
	run: async (interaction) => {
		let response = await postSlashCommand({ command: 'clear', payload: 'last' });

		return await interaction.reply({ content: `${response.message}`, ephemeral: true });
	},
};

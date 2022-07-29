import { SlashCommandBuilder } from '@discordjs/builders';
import { postSlashCommand } from '../../api';
import type { SLASH_COMMAND } from '../../interfaces';

export const removePostById: SLASH_COMMAND = {
	data: new SlashCommandBuilder()
		.setName('remove-post-by-ID')
		.setDescription('Clear a specific post from the queue.')
		.addStringOption((opt) =>
			opt.setName('post-id').setDescription('The id of the post you want to remove from the queue').setRequired(true)
		),
	run: async (interaction) => {
		let response = await postSlashCommand({
			command: 'clear',
			payload: interaction.options.getString('post-id')!,
		});

		return await interaction.reply({ content: `${response.message}`, ephemeral: true });
	},
};

import { SlashCommandBuilder } from '@discordjs/builders';

import type { CommandInteraction } from 'discord.js';
import { postSlashCommand } from '../../api';
import type { SlashCommandInt } from '../../interfaces';

export const clearPost: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('clear-post')
		.setDescription('Clear a specific post from the queue.')
		.addStringOption((opt) =>
			opt.setName('post-id').setDescription('The id of the post you want to remove from the queue').setRequired(true)
		),
	run: async (interaction: CommandInteraction) => {
		let clearResponse = await postSlashCommand({
			command: 'clear',
			payload: interaction.options.getString('post-id')!,
		});

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

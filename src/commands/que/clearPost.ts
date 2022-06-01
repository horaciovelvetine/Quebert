import { SlashCommandBuilder } from '@discordjs/builders';
import { PostCommand } from '../../utils/_index';

import type { CommandInteraction } from 'discord.js';
import type { Command } from '../../interfaces/_index';

export const clearPost: Command = {
	data: new SlashCommandBuilder()
		.setName('clear-post')
		.setDescription('Clear a specific post from the queue.')
		.addStringOption((opt) =>
			opt.setName('post-id').setDescription('The id of the post you want to remove from the queue').setRequired(true)
		),
	run: async (interaction: CommandInteraction) => {
		let clearResponse = await PostCommand({ name: 'clear', payload: interaction.options.getString('post-id')! });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

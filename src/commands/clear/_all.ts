import { SlashCommandBuilder } from '@discordjs/builders';
import { PostCommand } from '../../utils/_index';

import type { CommandInteraction } from 'discord.js';
import type { Command } from '../../interfaces/_index';

export const clearQue: Command = {
	data: new SlashCommandBuilder()
		.setName('clear-que')
		.setDescription('Clear all posts from the queue.')
		.addBooleanOption((opt) =>
			opt
				.setName('confirm-all')
				.setDescription('Are you sure you want to clear all posts from the queue?')
				.setRequired(true)
		),
	run: async (interaction: CommandInteraction) => {
		let clearResponse = await PostCommand({ name: 'clear', payload: 'all' });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

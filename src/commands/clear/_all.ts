import { SlashCommandBuilder } from '@discordjs/builders';

import type { CommandInteraction } from 'discord.js';
import { postSlashCommand } from '../../api';
import type { SlashCommandInt } from '../../interfaces';

export const clearAll: SlashCommandInt = {
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
		let clearResponse = await postSlashCommand({command: 'clear', payload: 'all' });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

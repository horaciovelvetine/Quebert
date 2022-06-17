import { SlashCommandBuilder } from '@discordjs/builders';
import { PostCommand } from '../utils/_index';

import type { CommandInteraction } from 'discord.js';
import type { Command } from '../interfaces/_index';

export const clearLast: Command = {
	data: new SlashCommandBuilder().setName('clear-last').setDescription('Clear the last post from the queue.'),
	run: async (interaction: CommandInteraction) => {
		let clearResponse = await PostCommand({ name: 'clear', payload: 'last' });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

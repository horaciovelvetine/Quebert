import { SlashCommandBuilder } from '@discordjs/builders';
import { PostCommand } from '../../utils/_index';

import type { CommandInteraction } from 'discord.js';
import type { Command } from '../../interfaces/_index';

export const clearAll: Command = {
	data: new SlashCommandBuilder()
		.setName('clear-all')
		.setDescription('Clear all posts from the Queue.')
		.addBooleanOption((opt) => opt.setName('confirm-clear-all').setRequired(true)),
	run: async (interaction: CommandInteraction) => {
		let clearResponse = await PostCommand({ name: 'clear', payload: `${interaction.options.getString('post-id')!}` });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

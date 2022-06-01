import { SlashCommandBuilder } from '@discordjs/builders';
import { PostCommand } from '../../utils/_index';

import type { CommandInteraction } from 'discord.js';
import type { Command } from '../../interfaces/_index';

export const clearById: Command = {
	data: new SlashCommandBuilder()
		.setName('clear-id')
		.setDescription('Clear a post from the Queue by the ID.')
		.addStringOption((opt) => opt.setName('post-id').setRequired(true)),
	run: async (interaction: CommandInteraction) => {
		let clearResponse = await PostCommand({ name: 'clear', payload: `${interaction.options.getString('post-id')!}` });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

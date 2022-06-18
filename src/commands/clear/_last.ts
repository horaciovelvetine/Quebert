import { SlashCommandBuilder } from '@discordjs/builders';
import { postSlashCommand } from '../../api';

import type { CommandInteraction } from 'discord.js';
import type { SlashCommandInt } from '../../interfaces';

export const clearLast: SlashCommandInt = {
	data: new SlashCommandBuilder().setName('clear-last').setDescription('Clear the last post from the queue.'),
	run: async (interaction: CommandInteraction) => {
		let clearResponse = await postSlashCommand({ command: 'clear', payload: 'last' });

		interaction.reply({ content: `${clearResponse.message}`, ephemeral: true });
	},
};

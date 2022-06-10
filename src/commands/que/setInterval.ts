import { PostCommand } from '../../utils/_index';
import { SlashCommandBuilder } from '@discordjs/builders';

import type { CommandInteraction } from 'discord.js';
import type { Command } from '../../interfaces/_index';

export const setInterval: Command = {
	data: new SlashCommandBuilder()
		.setName('interval-set')
		.setDescription('Set the interval Quebert waits between sending out messages')
		.addStringOption((opt) => opt.setName('interval').setDescription('The desired interval in MS').setRequired(true)),
	run: async (interaction: CommandInteraction) => {
		const newInterval = interaction.options.getString('interval')!;
		let resp = await PostCommand({ name: 'setInterval', payload: newInterval });

		interaction.reply({ content: resp.message, ephemeral: true });
	},
};

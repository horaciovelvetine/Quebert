import { SlashCommandBuilder } from '@discordjs/builders';
import type { CommandInteraction } from 'discord.js';

import { postSlashCommand } from '../api';
import { modOnlyGuild } from '../config';
import { addQueEmbed } from '../messages';
import type { SlashCommandInt } from '../interfaces';

export const que: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('que')
		.setDescription('Add a message to the Queue')
		.addChannelOption((opt) => opt.setName('target-channel').setDescription('Channel target').setRequired(true))
		.addStringOption((opt) => opt.setName('msg-body').setDescription('Message body').setRequired(true)),
	run: async (interaction: CommandInteraction) => {
		let targetGuild = interaction.options.getChannel('target-channel')!;
		let msgBody = interaction.options.getString('msg-body')!;

		const response = await postSlashCommand({
			command: 'que',
			payload: {
				id: interaction.id,
				body: msgBody,
				target: targetGuild,
			},
		});


		modOnlyGuild(interaction)?.send({ embeds: [addQueEmbed(interaction, response.payload)] });
		await interaction.reply({ content: `${response.message}`, ephemeral: true });
	},
};

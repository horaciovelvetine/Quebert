import { SlashCommandBuilder } from '@discordjs/builders';
import type { CommandInteraction } from 'discord.js';

import { postSlashCommand } from '../api';
import { modOnlyGuild } from '../config';
import { addQueEmbed } from '../messages';
import type { SlashCommandInt } from '../interfaces';

export const que: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('que')
		.setDescription('Add a message to the Queue for Quebert to send later.')
		.addChannelOption((opt) =>
			opt.setName('target-channel').setDescription('Channel where Quebert will send the message').setRequired(true)
		)
		.addStringOption((opt) => opt.setName('msg-body').setDescription('The body of thee message').setRequired(true)),
	run: async (interaction: CommandInteraction) => {
		let targetGuild = interaction.options.getChannel('target-channel')!;
		let msgBody = interaction.options.getString('msg-body')!;

		const response = await postSlashCommand({
			command: 'que',
			payload: { id: interaction.id, body: msgBody, target_channel: targetGuild },
		});
		let modEmbedPreview = addQueEmbed(interaction, response);
		modOnlyGuild(interaction)?.send({ embeds: [modEmbedPreview] });
		await interaction.reply({ content: `${response.message}`, ephemeral: true });
	},
};

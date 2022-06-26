import { SlashCommandBuilder } from '@discordjs/builders';
import type { CommandInteraction } from 'discord.js';

import { postSlashCommand } from '../api';
import { statusEmbed } from '../messages';
import type { SlashCommandInt } from '../interfaces';

export const status: SlashCommandInt = {
	data: new SlashCommandBuilder().setName('status').setDescription(`Ask Quebert how it's going`),
	run: async (interaction: CommandInteraction) => {
		let statusResponse = await postSlashCommand({ command: 'status', payload: 'default' });

		let modEmbedPreview = statusEmbed(
			interaction,
			statusResponse
		);
		await interaction.reply({ embeds: [modEmbedPreview], ephemeral: true });
	},
};

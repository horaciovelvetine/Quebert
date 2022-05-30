import { NotificationEmbedBuilder, ModOnlyGuild, PostCommand } from '../../utils/_index';
import { SlashCommandBuilder } from '@discordjs/builders';

import type { CommandInteraction } from 'discord.js';
import type { Command } from '../../interfaces/_index';

export const que: Command = {
	data: new SlashCommandBuilder()
		.setName('que')
		.setDescription('Add a message to the Queue for Quebert to send later.')
		.addChannelOption((opt) =>
			opt.setName('target-channel').setDescription('Channel where Quebert will send messages to.').setRequired(true)
		)
		.addStringOption((opt) =>
			opt.setName('msg-body').setDescription('The message body you want to send').setRequired(true)
		),
	run: async (interaction: CommandInteraction) => {
		const targetGuild = interaction.options.getChannel('target-channel')!;
		const msgBody = interaction.options.getString('msg-body')!;
		const newPostInfo = { id: interaction.id, body: msgBody, targetGuild: targetGuild };
		let response = await PostCommand({name: 'que', payload: newPostInfo});
		// const modEmbedPreview = NotificationEmbedBuilder(interaction, newPostInfo);

		console.log(response)
		// ModOnlyGuild(interaction)!.send({ embeds: [modEmbedPreview] });
		// interaction.reply({ content: 'Message added to Que', ephemeral: true });
	},
};

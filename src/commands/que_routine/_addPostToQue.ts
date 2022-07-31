//external libs
import { SlashCommandBuilder } from '@discordjs/builders';

// lib
import { postSlashCommand } from '../../api';
import type { SLASH_COMMAND } from '../../interfaces';
import { checkForRunningOrStart } from '../../jobs';
import { addPostToQuePreviewEmbed } from '../../messages';
import { getModOnlyFromInteraction } from '../../utils';

export const addPostToQue: SLASH_COMMAND = {
	data: new SlashCommandBuilder()
		// for adding a post to the que via url
		.setName('que')
		.setDescription('Adds a message to the Queue via url')
		.addStringOption((opt) => opt.setName('url').setDescription('Url of the job-posting').setRequired(true))
		.addChannelOption((opt) => opt.setName('target-channel').setDescription('Channel target').setRequired(true)),

	run: async (interaction, jobsSchedulerClient) => {
		// command logic
		let targetChannel = interaction.options.getChannel('target-channel')!;
		let url = interaction.options.getString('url')!;

		let apiResponse = await postSlashCommand({
			command: 'que',
			payload: { id: interaction.id, body: url, target: targetChannel.id },
		});

		if (!apiResponse.success) {
			// API call failed... documents errror informs user
			getModOnlyFromInteraction(interaction).send({ content: apiResponse.payload.error });
			return await interaction.reply({
				content: 'Something went wrong. Check the #moderator-only channel for more details',
				ephemeral: true,
			});
		} else {
			// API call succeeded...then checks Que Routine status and restarts/starts if not running
			checkForRunningOrStart({ interaction, jobsSchedulerClient });
			return await interaction.reply({
				content: apiResponse.message,
				ephemeral: true,
				embeds: [addPostToQuePreviewEmbed({ interaction, target: targetChannel.name, body: url })],
			});
		}
		//no mans land
	},
};

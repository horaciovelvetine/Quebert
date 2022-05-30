import { CommandInteraction, MessageEmbed } from 'discord.js';
import type { QueResponseData } from '../../interfaces/_index';

export const QueResponseEmbed = (interaction: CommandInteraction, queResponse: QueResponseData) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Channel Target:', value: `${queResponse.newPostInfo.target}` },
			{ name: 'Post ID:', value: `${queResponse.newPostInfo.id}` },
			{ name: 'Post Body:', value: `${queResponse.newPostInfo.body}` }
		)
		.setTitle('Added a post to the Que:')
		.setAuthor({ name: `${interaction.user.username}` });
};

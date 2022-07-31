import { CommandInteraction, MessageEmbed } from 'discord.js';

interface ADD_POST_TO_QUE_PREVIEW_PARAMS {
	interaction: CommandInteraction;
	target: string;
	body: string;
}
export const addPostToQuePreviewEmbed = ({ interaction, target, body }: ADD_POST_TO_QUE_PREVIEW_PARAMS) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Channel Target:', value: `${target}` },
			{ name: 'Post ID:', value: `${interaction.id}` },
			{ name: 'Post Body:', value: `${body}` }
		)
		.setTitle(' added a post to the queue:')
		.setAuthor({ name: `${interaction.user.username}` });
};

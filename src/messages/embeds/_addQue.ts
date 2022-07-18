import { CommandInteraction, MessageEmbed } from 'discord.js';

interface AddQueEmbedInt {
	target: string;
	body: string;
}
export const addQueEmbed = (interaction: CommandInteraction, { target, body }: AddQueEmbedInt) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Channel Target:', value: `${target}` },
			{ name: 'Post ID:', value: `${interaction.id}` },
			{ name: 'Post Body:', value: `${body}` }
		)
		.setTitle('added a post to the queue:')
		.setAuthor({ name: `${interaction.user.username}` });
};

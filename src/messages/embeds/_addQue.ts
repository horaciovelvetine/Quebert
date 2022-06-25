import { CommandInteraction, MessageEmbed } from 'discord.js';

interface AddQueInfoInt {
	id: string;
	body: string;
	target: string;
}

export const addQueEmbed = (interaction: CommandInteraction, { id, target, body }: AddQueInfoInt) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Channel Target:', value: `${target}` },
			{ name: 'Post ID:', value: `${id}` },
			{ name: 'Post Body:', value: `${body}` }
		)
		.setTitle('added a post to the queue:')
		.setAuthor({ name: `${interaction.user.username}` });
};

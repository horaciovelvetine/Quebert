import { CommandInteraction, MessageEmbed } from 'discord.js';
import type { APIResponseInt } from '../../interfaces';


export const addQueEmbed = (interaction: CommandInteraction, response: APIResponseInt) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Channel Target:', value: `${response.payload}` },
			{ name: 'Post ID:', value: `${response.payload}` },
			{ name: 'Post Body:', value: `${response.payload}` }
		)
		.setTitle('Added a post to the Que:')
		.setAuthor({ name: `${interaction.user.username}` });
};

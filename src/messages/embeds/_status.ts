import { CommandInteraction, MessageEmbed } from 'discord.js';
import type { APIResponseInt } from '../../interfaces';

export const statusEmbed = (interaction: CommandInteraction, response: APIResponseInt) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Posts Cumulative:', value: `${response.payload}` },
			{ name: 'Number of posts in queue:', value: `${response.payload}` },
			{ name: 'Time to next post:', value: 'Soon.. well ish right??' },
			{ name: 'Time until queue empty:', value: `${response.payload}` }
		)
		.setTitle(`Quebert Status Info:`)
		.setAuthor({ name: `${interaction.user.username}` });
};

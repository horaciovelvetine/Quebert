import { CommandInteraction, MessageEmbed } from 'discord.js';
import type { StatusResponseData } from '../../interfaces/_index';

export const StatusResponseEmbed = (interaction: CommandInteraction, statusResponse: StatusResponseData) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Posts Cumulative:', value: `${statusResponse.total_posts}` },
			{ name: 'Number of posts in queue:', value: `${statusResponse.total_posts}` },
			{ name: 'Time to next post:', value: 'Soon.. well ish right??' },
			{ name: 'Time until queue empty:', value: `${statusResponse.total_posts === 0 ? 'Now' : 'Later'}` }
		)
		.setTitle(`Quebert Status Info:`)
		.setAuthor({ name: `${interaction.user.username}` });
};

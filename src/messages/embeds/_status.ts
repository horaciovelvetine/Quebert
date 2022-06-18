import { CommandInteraction, MessageEmbed } from 'discord.js';
import type { APIResponseInt } from '../../interfaces';

export const statusEmbed = (interaction: CommandInteraction, response: APIResponseInt) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Posts Cumulative:', value: response.payload.total_posts! },
			{ name: 'Number of posts in queue:', value: response.queue_length! },
			{ name: 'Time to next post:', value: response.payload.time_to_next_post! },
			{ name: 'Time until queue empty:', value: response.payload.time_to_empty! }
		)
		.setTitle(`Quebert Status Info:`)
		.setAuthor({ name: `${interaction.user.username}` });
};

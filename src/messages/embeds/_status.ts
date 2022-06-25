import { CommandInteraction, MessageEmbed } from 'discord.js';
import type { APIResponseInt } from '../../interfaces';

export const statusEmbed = (interaction: CommandInteraction, response: APIResponseInt) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Current queue length:', value: response.payload.total_queued! },
			{ name: 'Time to next post:', value: response.payload.time_to_next! }
		)
		.setTitle(`Quebert Status Info:`)
		.setAuthor({ name: `${interaction.user.username}` });
};

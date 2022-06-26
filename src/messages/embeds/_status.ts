import { CommandInteraction, MessageEmbed } from 'discord.js';
import type { APIResponseInt } from '../../interfaces';

export const statusEmbed = (interaction: CommandInteraction, statusResponse: APIResponseInt) => {
	const { total_queued, time_to_next } = { ...statusResponse.payload };

	return new MessageEmbed()
		.addFields(
			{ name: 'Current queue length:', value: total_queued! },
			{ name: 'Time to next post:', value: time_to_next! }
		)
		.setTitle(`Quebert Status Info:`)
		.setAuthor({ name: `${interaction.user.username}` });
};

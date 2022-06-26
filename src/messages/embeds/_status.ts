import { CommandInteraction, MessageEmbed } from 'discord.js';

export const statusEmbed = (interaction: CommandInteraction, total_queued: string, time_to_next: string) => {
	return new MessageEmbed()
		.addFields(
			{ name: 'Current queue length:', value: total_queued },
			{ name: 'Time to next post:', value: time_to_next }
		)
		.setTitle(`Quebert Status Info:`)
		.setAuthor({ name: `${interaction.user.username}` });
};

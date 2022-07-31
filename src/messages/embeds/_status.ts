import { CommandInteraction, MessageEmbed } from 'discord.js';

interface STATUS_EMBED_PROPS {
	interaction: CommandInteraction;
	queued: string;
}

export const statusEmbed = ({ interaction, queued }: STATUS_EMBED_PROPS) => {
	return new MessageEmbed()
		.addFields({ name: 'Current queue length:', value: queued! })
		.setTitle(`Quebert Status Info:`)
		.setAuthor({ name: `${interaction.user.username}` });
};

import { MessageEmbed } from 'discord.js';

export const errorEmbed = (error: string, author = 'default'): MessageEmbed => {
	return new MessageEmbed()
		.setTitle('Quebert Encountered an Error!')
		.setDescription(`${error}`)
		.setAuthor({ name: `Quebert Encountered an in ${author}` })
		.setFooter({
			text: 'Please submit this issue directly on the github: https://github.com/horaciovelvetine/quebert',
		});
};

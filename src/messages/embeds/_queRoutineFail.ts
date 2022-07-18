import { MessageEmbed } from 'discord.js';

export const queRoutineFailEmbed = ({ message, cause, name }: Error) => {
	return new MessageEmbed()
		.setTitle('Queue Routine Failed')
		.addFields(
			{ name: 'Name:', value: `${name}` },
			{ name: 'Cause:', value: `${cause}` },
			{ name: 'Message', value: `${message}` }
		);
};

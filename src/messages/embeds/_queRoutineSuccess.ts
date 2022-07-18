import { MessageEmbed } from 'discord.js';

export const queRoutineSuccessEmbed = (message: string) => {
	return new MessageEmbed().setTitle('Que Routines Success').setDescription(`${message}`);
};

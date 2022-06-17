import { MessageEmbed } from 'discord.js';

//TODO total left in que, time until empty possibly,
export const queRoutineSuccessEmbed = (message: string) => {
	return new MessageEmbed().setTitle('Que Routines Success').setDescription(`${message}`);
};

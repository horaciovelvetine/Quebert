import { MessageEmbed } from 'discord.js';

export const queRoutineFailEmbed = (message: string) => {
	return new MessageEmbed().setTitle('Queue Routine Faileed').setDescription(`${message}`);
};

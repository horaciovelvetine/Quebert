import { SlashCommandBuilder } from '@discordjs/builders';

import type { SlashCommandInt } from '../../interfaces';

export const pauseQueRoutine: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('pause-que-routine')
		.setDescription('Pause Quebert so he stops sending posts from the queue.'),
	run: async (interaction, queScheduler) => {
		let task = queScheduler.getById('QueRoutine');
		if (!task) {
			await interaction.reply({ content: 'Que Routine not initialized, use: `start-que-routine` to initialize.' });
		} else {
			if (task.getStatus() === 'stopped') return;
			task.stop();
			await interaction.reply({ content: 'Que Routine paused successfully' });
		}
	},
};

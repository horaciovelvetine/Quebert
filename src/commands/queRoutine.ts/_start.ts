import { SlashCommandBuilder } from '@discordjs/builders';

import type { SlashCommandInt } from '../../interfaces';
import { initQueRoutine } from '../../jobs';

export const startQueRoutine: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('start-que-routine')
		.setDescription('Restarts -or- resets the Que Routine.'),
	run: async (interaction, queScheduler, guilds) => {
		let task = queScheduler.getById('QueRoutine');
		if (!task) {
      initQueRoutine(guilds, queScheduler)
			await interaction.reply({ content: 'Que Routine initialized, use: `stop-que-routine` -or- `pause-que-routine`.' });
		} else {
			task.start();
			await interaction.reply({ content: 'Que Routine paused successfully' });
		}
	},
};

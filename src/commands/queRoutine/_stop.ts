import { SlashCommandBuilder } from '@discordjs/builders';

import type { SlashCommandInt } from '../../interfaces';

export const stopQueRoutine: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('stop-que-routine')
		.setDescription('Stops and removes the job (in-case of Quebert Task Error)'),
	run: async (interaction, queScheduler) => {
		let task = queScheduler.getById('QueRoutine');
		if (!task) {
			await interaction.reply({
				content: 'Que Routine initialized, use: `stop-que-routine` -or- `pause-que-routine`.',
			});
		} else {
			queScheduler.removeById('QueRoutine');
			await interaction.reply({ content: 'Que Routine stopped successfully' });
		}
	},
};

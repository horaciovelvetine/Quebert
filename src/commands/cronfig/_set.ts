import { SlashCommandBuilder } from '@discordjs/builders';
import { postCronfig } from '../../api';

import type { SlashCommandInt } from '../../interfaces';
import { initQueRoutine } from '../../jobs';

export const setCronfig: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('set-interval')
		.setDescription('Change the current interval Quebert waits between posts: (blank values will be 0 by default)')
		.addStringOption((opt) => opt.setName('days').setDescription('# of days'))
		.addStringOption((opt) => opt.setName('hours').setDescription('# of hours'))
		.addStringOption((opt) => opt.setName('mins').setDescription('# of minutes'))
		.addStringOption((opt) => opt.setName('secs').setDescription('# of seconds'))
		.addBooleanOption((opt) =>
			opt
				.setName('run-on-start')
				.setDescription('run the Que-Routine on startup (will immediately post anything still in Queue).')
		),
	run: async (interaction, queScheduler, guilds) => {
		let options = { ...interaction.options };
		let newCron = {
			days: options.getString('days'),
			hours: options.getString('hours'),
			minutes: options.getString('mins'),
			seconds: options.getString('secs'),
			run_on_start: options.getBoolean('run-on-start'),
		};
		let response = await postCronfig({ command: 'set_cronfig', new_cronfig: newCron });

		queScheduler.removeById('QueRoutine');
		initQueRoutine(guilds, queScheduler);

		interaction.reply({ content: `${response.message}`, ephemeral: true });
	},
};

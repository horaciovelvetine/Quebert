// exteranl lib
import { SlashCommandBuilder } from '@discordjs/builders';
import { postCronfig } from '../../api';

// lib
import type { SLASH_COMMAND } from '../../interfaces';
import { initializeQueRoutine } from '../../jobs';

export const setCronfigInterval: SLASH_COMMAND = {
	data: new SlashCommandBuilder()
		.setName('set-cronfig-interval')
		.setDescription(
			'Set the amount of time Quebert waits between each Que Routine run ( a value of 0 will be used for any input left blank). This command will restart the Que-Routine job with the new interval'
		)
		.addNumberOption((opt) => opt.setName('Days').setDescription('Days').setRequired(false))
		.addNumberOption((opt) => opt.setName('Hours').setDescription('Hours').setRequired(false))
		.addNumberOption((opt) => opt.setName('Minutes').setDescription('Minutes').setRequired(false))
		.addNumberOption((opt) => opt.setName('Seconds').setDescription('Seconds').setRequired(false))
		.addBooleanOption((opt) =>
			opt
				.setName('Run Immediately?')
				.setDescription('Have Quebert run the Que Routine immediately on start up?')
				.setRequired(true)
		),
	run: async (interaction, jobsSchedulerClient) => {
		//gets all input values
		let days = interaction.options.getNumber('Days') || 0;
		let hours = interaction.options.getNumber('Hours') || 0;
		let minutes = interaction.options.getNumber('Minutes') || 0;
		let seconds = interaction.options.getNumber('Seconds') || 0;
		let runImmediately = interaction.options.getBoolean('Run Immediately?')!;

		const payload = { days, hours, minutes, seconds, runImmediately };

		let response = await postCronfig(payload);

		if (response.success) {
			// restart the que routine job with the new interval
			jobsSchedulerClient.getById('QueRoutine').stop();
			initializeQueRoutine({ client: interaction.client, jobsSchedulerClient });
			return await interaction.reply({ content: response.message });
		}
		// set cronfig attempt failed
		return await interaction.reply({ content: response.message });
	},
};

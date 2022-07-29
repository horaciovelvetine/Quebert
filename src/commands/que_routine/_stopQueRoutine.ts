import { SlashCommandBuilder } from '@discordjs/builders';
import type { SLASH_COMMAND } from '../../interfaces';

export const stopQueRoutine: SLASH_COMMAND = {
	data: new SlashCommandBuilder()
		.setName('stop-que-routine')
		.setDescription(`Pause the Que Routine `)
		.addBooleanOption((opt) => opt.setName('verify-sure').setDescription('Are you sure?').setRequired(true)),
	run: async (interaction, jobsSchedulerClient) => {
		let verifySure = interaction.options.get('verify-sure');

		if (!verifySure) {
			// incase they enter false on if they're sure for some reason...
			return await interaction.reply({
				content: 'You must verify that you are sure you want to stop the Que Routine in order to stop the Que Routine.',
				ephemeral: true,
			});
		}

		jobsSchedulerClient.getById('QueRoutine').stop();
		return await interaction.reply({
			content: 'Que Routine stopped, (re)-start it using the `/start-que-routine` command',
		});
	},
};

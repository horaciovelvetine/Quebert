import { SlashCommandBuilder } from '@discordjs/builders';
import type { SLASH_COMMAND } from '../../interfaces';
import { checkForRunningOrStart } from '../../jobs';

export const startQueRoutine: SLASH_COMMAND = {
	data: new SlashCommandBuilder()
		.setName('start-que-routine')
		.setDescription(`Start the Que Routine (will restart if already running)`)
		.addBooleanOption((opt) => opt.setName('verify-sure').setDescription('Are you sure?').setRequired(true)),
	run: async (interaction, jobsSchedulerClient) => {
		let verifySure = interaction.options.getBoolean('verify-sure')!;
		if (!verifySure) {
			// incase they enter false on if they're sure for some reason...
			return await interaction.reply({
				content:
					'You must verify that you are sure you want to (re)-start the Que Routine in order to (re)-start the Que Routine. [lol]',
				ephemeral: true,
			});
		}
		// start the que routine
		checkForRunningOrStart({ interaction, jobsSchedulerClient });
		return await interaction.reply({
			content: ' Que Routine (re)-started. You can add posts using the `/que` command.',
			ephemeral: true,
		});
	},
};

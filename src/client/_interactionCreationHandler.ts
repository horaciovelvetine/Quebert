// external lib imports
import type { Interaction } from 'discord.js';
import type { ToadScheduler } from 'toad-scheduler';

//lib
import type { COMBINED_COMMANDS } from '../interfaces';
import { devConsoleMessage } from '../messages';

interface INTERACTION_HANDLER_PROPS {
	interaction: Interaction;
	jobsSchedulerClient: ToadScheduler;
	slashCommands: COMBINED_COMMANDS[];
}

export async function interactionCreateHandler({
	interaction,
	jobsSchedulerClient,
	slashCommands,
}: INTERACTION_HANDLER_PROPS) {
	// SLASH COMMAND INTERACTION HANDLING
	if (!interaction.isCommand()) return;

	try {
		for (const command of slashCommands) {
			if (interaction.commandName === command.data.name) {
				await command.run(interaction, jobsSchedulerClient);
			}
		}
	} catch (error) {
		devConsoleMessage(error);
		await interaction.reply({ content: `${error.message}`, ephemeral: true });
	}
}

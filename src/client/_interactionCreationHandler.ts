// external lib imports
import type { Collection, Interaction, TextChannel } from 'discord.js';
import type { ToadScheduler } from 'toad-scheduler';

//lib
import type { CombinedCommandsInt } from '../interfaces';

interface INTERACTION_HANDLER_PROPS {
	interaction: Interaction;
	queScheduler: ToadScheduler;
	guilds: Collection<string, TextChannel>;
	slashCommands: CombinedCommandsInt[];
}

export async function interactionCreateHandler({
	interaction,
	queScheduler,
	guilds,
	slashCommands,
}: INTERACTION_HANDLER_PROPS) {
	// SLASH COMMAND INTERACTION HANDLING
	if (!interaction.isCommand()) return;

	try {
		for (const command of slashCommands) {
			if (interaction.commandName === command.data.name) {
				await command.run(interaction, queScheduler, guilds);
			}
		}
	} catch (error) {
		await interaction.reply({ content: `${error}`, ephemeral: true });
	}
}

// external libs
import type { Client } from 'discord.js';
import type { ToadScheduler } from 'toad-scheduler';

// interfaces
import type { COMBINED_COMMANDS } from '../interfaces';

//lib
import { deploySlashCommands } from './_deploySlashCommands';
import { initializeQueRoutine } from '../jobs';

interface ON_READY_PROPS {
	slashCommands: COMBINED_COMMANDS[];
	jobsSchedulerClient: ToadScheduler;
	client: Client;
}

export async function onReadyHandler({ slashCommands, jobsSchedulerClient, client }: ON_READY_PROPS) {
	// sets slashCommands value for interactionCreateHandler to use
	slashCommands = await deploySlashCommands();
	initializeQueRoutine({ client, jobsSchedulerClient });
}

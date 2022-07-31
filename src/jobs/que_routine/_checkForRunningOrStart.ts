// external libs
import type { CacheType, CommandInteraction } from 'discord.js';
import type { ToadScheduler } from 'toad-scheduler';

// lib
import { getModOnlyFromInteraction } from '../../utils';
import { initializeQueRoutine } from './_init';

interface CHECK_RUNNING_OR_START_PROPS {
	interaction: CommandInteraction<CacheType>;
	jobsSchedulerClient: ToadScheduler;
}

export function checkForRunningOrStart({ interaction, jobsSchedulerClient }: CHECK_RUNNING_OR_START_PROPS) {
	// checks on Que_Routine and restarts/starts if not running
	let queRoutineJob = jobsSchedulerClient.getById('QueRoutine');

	if (!queRoutineJob) {
		// Que Routine does not exist, initialize new routine
		initializeQueRoutine({ client: interaction.client, jobsSchedulerClient });
		getModOnlyFromInteraction(interaction).send({ content: 'A new Que Routine has been started.' });
	} else if (queRoutineJob.getStatus() === 'stopped') {
		// Que Routine is stopped, restart it
		jobsSchedulerClient.startById('QueRoutine');
		getModOnlyFromInteraction(interaction).send({ content: 'The Que Routine has been restarted.' });
	}
	// else jobs already working, do nothing
	return;
}

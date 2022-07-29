// external libs
import type { Client } from 'discord.js';
import { SimpleIntervalJob, ToadScheduler } from 'toad-scheduler';
import { getCurrentCronfig } from '../../api';
import { createQueRoutineTask } from './_createTask';

interface INITIALIZE_QUE_ROUTINE_PROPS {
	client: Client;
	jobsSchedulerClient: ToadScheduler;
}
const task_id = 'QueRoutine';

// fetches current cronfig from api to set interval timing
const cronfig = async () => {
	return await getCurrentCronfig().then((res) => res.payload.cronfig);
};

export async function initializeQueRoutine({ client, jobsSchedulerClient }: INITIALIZE_QUE_ROUTINE_PROPS) {
	let newIntervalJob = new SimpleIntervalJob(
		await cronfig(),
		createQueRoutineTask({ client, scheduler: jobsSchedulerClient, task_id }),
		task_id
	);

	jobsSchedulerClient.addSimpleIntervalJob(newIntervalJob);
}

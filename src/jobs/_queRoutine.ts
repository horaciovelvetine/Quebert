import axios from 'axios';
import type { Collection, TextChannel } from 'discord.js';
import { SimpleIntervalJob, AsyncTask, ToadScheduler } from 'toad-scheduler';
import { baseUrlFormatter } from '../api';
import config from '../config/config';
import type { APIResponseInt } from '../interfaces';
import { devConsoleMessage, queRoutineFailEmbed, queRoutineSuccessEmbed } from '../messages';

let { mod } = config;
const ID = 'QueRoutine';

export const initQueRoutine = async (
	guilds: Collection<string, TextChannel>,
	scheduler: ToadScheduler
	// cronfig = [0, 0, 15, 0, 0, true] => potential for later setup when start/stoppable
) => {
	let task = new AsyncTask(
		ID,
		async () => {
			let queRoutine: APIResponseInt = await axios
				.get(baseUrlFormatter('/post-routine'))
				.then((response) => response.data);
			
			
			//! START::
			//? should loop over response, and get each guild in payload and 
			devConsoleMessage(queRoutine.message);
			guilds.get(mod)!.send({ embeds: [queRoutineSuccessEmbed(queRoutine.message)] });
		},
		(error) => {
			devConsoleMessage(error.message);
			guilds.get(mod)!.send({ embeds: [queRoutineFailEmbed(error.message)] });
		}
	);

	let queRoutine = new SimpleIntervalJob(
		{
			minutes: 3,
			runImmediately: true,
		},
		task,
		ID
	);
	scheduler.addSimpleIntervalJob(queRoutine);
};

export const stopQueRoutine = (scheduler: ToadScheduler) => {
	pauseQueRoutine(scheduler);
	scheduler.removeById(ID);
};

export const pauseQueRoutine = (scheduler: ToadScheduler) => {
	scheduler.stopById(ID);
};

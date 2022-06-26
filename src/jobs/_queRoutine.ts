import axios from 'axios';
import type { Collection, TextChannel } from 'discord.js';
//? https://github.com/kibertoad/toad-scheduler
import { SimpleIntervalJob, AsyncTask, ToadScheduler } from 'toad-scheduler';

import { baseUrlFormatter, getCurrentCronfig } from '../api';
import config from '../config/config';
import type { APIResponseInt } from '../interfaces';
import { devConsoleMessage, queRoutineFailEmbed, queRoutineSuccessEmbed } from '../messages';

const { mod } = config;
const ID = 'QueRoutine';
const cronfig = async () => {
	return await getCurrentCronfig().then((res) => res.payload);
};

//==> TRY CATCH VERSION WITH A SYS_DEFAULT??
// const test_cronfig = async (guilds: Collection<string, TextChannel>) => {
// 	let sys_default = { days: 0, hours: 0, minutes: 15, seconds: 0, runImmediately: true };
// 	try {
// 		return await getCurrentCronfig().then((res) => res.payload);
// 	} catch (error) {
// 		guilds.get(mod)!.send({ embeds: [queRoutineFailEmbed(error)] });
// 		return sys_default
// 	}
// };

export const initQueRoutine = async (guilds: Collection<string, TextChannel>, scheduler: ToadScheduler) => {
	let task = new AsyncTask(
		ID,
		async () => {
			let queRoutine: APIResponseInt = await axios
				.get(baseUrlFormatter('/post-routine'))
				.then((response) => response.data);

			if (!queRoutine.payload.posts) {
				guilds.get(mod)!.send({ content: 'Queue routine: Posts returned falsey from API' });
			} else if (queRoutine.payload.posts.length === 0) {
				// no posts in Queue
				guilds.get(mod)!.send({ content: `Queue routine success: 0 posts in Queue` });
			} else {
				// posts path
				queRoutine.payload.posts.forEach((post) => {
					guilds.get(post.target)?.send(post.body);
				});
				guilds.get(mod)!.send({ embeds: [queRoutineSuccessEmbed(queRoutine.message)] });
			}
			devConsoleMessage(queRoutine.message);
		},
		(error) => {
			devConsoleMessage(error.message);
			guilds.get(mod)!.send({ embeds: [queRoutineFailEmbed(error)] });
		}
	);
	let queRoutine = new SimpleIntervalJob(await cronfig(), task, ID);
	scheduler.addSimpleIntervalJob(queRoutine);
};

export const stopQueRoutine = (scheduler: ToadScheduler) => {
	pauseQueRoutine(scheduler);
	scheduler.removeById(ID);
};

export const pauseQueRoutine = (scheduler: ToadScheduler) => {
	scheduler.stopById(ID);
};

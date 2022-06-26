import axios from 'axios';
import type { Collection, TextChannel } from 'discord.js';
import { SimpleIntervalJob, AsyncTask, ToadScheduler } from 'toad-scheduler';
import { baseUrlFormatter } from '../api';
import config from '../config/config';
import type { APIResponseInt } from '../interfaces';
import { devConsoleMessage, queRoutineFailEmbed, queRoutineSuccessEmbed } from '../messages';

let { mod } = config;
const ID = 'QueRoutine';

//? https://github.com/kibertoad/toad-scheduler

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
				guilds.get(mod)!.send({ content: 'Queue routine: No posts in Queue' });
			} else {
				// posts path
				queRoutine.payload.posts.forEach((post) => {
					guilds.get(post.target)?.send(post.body);
					guilds.get(mod)!.send({ embeds: [queRoutineSuccessEmbed(queRoutine.message)] });
				});
			}

			devConsoleMessage(queRoutine.message);
		},
		(error) => {
			devConsoleMessage(error.message);
			guilds.get(mod)!.send({ embeds: [queRoutineFailEmbed(error)] });
		}
	);

	let queRoutine = new SimpleIntervalJob(
		{
			minutes: 5,
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

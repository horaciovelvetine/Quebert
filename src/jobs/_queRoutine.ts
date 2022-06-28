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
const cronfig = async (guilds: Collection<string, TextChannel>) => {
	try {
		return await getCurrentCronfig().then((res) => res.payload);
	} catch (error) {
		guilds.get(mod)!.send({ embeds: [queRoutineFailEmbed(error)], content: 'Default cronfig used' });
		return { days: 0, hours: 0, minutes: 15, seconds: 0, runImmediately: true };
	}
};

export const initQueRoutine = async (guilds: Collection<string, TextChannel>, scheduler: ToadScheduler) => {
	let task = new AsyncTask(
		ID,
		async () => {
			let queRoutine: APIResponseInt = await axios
				.get(baseUrlFormatter('/post-routine'))
				.then((response) => response.data);

			// ToadScheduler builds in error handling: `!` is used for pot/undefined
			if (queRoutine.payload.posts!.length === 0) {
				// no posts in Queue pause or handle err
				if (scheduler.getById(ID).getStatus()) {
					scheduler.stopById(ID); //task still exists but is .getStatus() == 'stopped'
					guilds.get(mod)!.send({ content: 'Queue Routine paused: add items queue with: `/que`' });
				} else {
					guilds.get(mod)!.send({ content: 'Queue empty: no job found?' });
				}
			} else {
				// posts in Queue success path
				queRoutine.payload.posts!.forEach((post) => {
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
	// INIT STARTS HERE::
	let queRoutine = new SimpleIntervalJob(await cronfig(guilds), task, ID);
	scheduler.addSimpleIntervalJob(queRoutine);
};

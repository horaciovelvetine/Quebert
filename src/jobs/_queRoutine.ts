import axios from 'axios';
import type { Collection, TextChannel } from 'discord.js';
import { SimpleIntervalJob, AsyncTask, ToadScheduler } from 'toad-scheduler';
import { baseUrlFormatter } from '../api';
import config from '../config/config';
import type { APIResponseInt } from '../interfaces';
import { devConsoleMessage, queRoutineFailEmbed } from '../messages';
import { queRoutineSuccessEmbed } from '../messages/embeds/_queRoutineSuccess';

let { mod } = config;

// "".stopById('QueRoutine')
// "".removeById('QueRoutine')
// "".getById('QueRoutine).getStatus() === 'running' | 'stopped'

export const initQueRoutine = async (guilds: Collection<string, TextChannel>, queScheduler: ToadScheduler) => {
	let postFromQueue = new AsyncTask(
		'post-from-queue',
		async () => {
			let currentQueue: APIResponseInt = await axios
				.get(baseUrlFormatter('/post-routine'))
				.then((response) => response.data)
				.catch((error) => {
					devConsoleMessage(error);
					guilds.get(mod)!.send({ embeds: [queRoutineFailEmbed(currentQueue.message)] });
				});
			//! SEND ITERATION IS LAST STEP
			console.log(currentQueue.message);
			// currentQueue.payload.posts.forEach((post) => {
			// 	guilds.get(post.target_id)?.send({ content: post.body });
			// });

			guilds.get(mod)!.send({ embeds: [queRoutineSuccessEmbed(currentQueue.message)] });
		},
		(error) => {
			devConsoleMessage(error.message);
			guilds.get(mod)!.send({
				content: `Encountered an unknown issue during the QueRoutine, please restart Quebert and try again, message: ${error}`,
			});
		}
	);

	let QueRoutine = new SimpleIntervalJob({ minutes: 15, runImmediately: true }, postFromQueue, 'QueRoutine');
	queScheduler.addSimpleIntervalJob(QueRoutine);
};

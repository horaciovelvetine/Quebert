// external libs
import type { Client, TextChannel } from 'discord.js';
import { AsyncTask, ToadScheduler } from 'toad-scheduler';

// lib
import { getQueRoutine } from '../../api';
import { devConsoleMessage, queRoutineFailEmbed, queRoutineSuccessEmbed } from '../../messages';
import { getModOnlyFromClient } from '../../utils';

interface CREATE_QUE_ROUTINE_PROPS {
	client: Client;
	scheduler: ToadScheduler;
	task_id: 'QueRoutine';
}

export const createQueRoutineTask = ({ client, scheduler, task_id }: CREATE_QUE_ROUTINE_PROPS): AsyncTask => {
	return new AsyncTask(
		task_id,
		async () => {
			let response = await getQueRoutine();
			let payload = response.payload;

			switch (true) {
				case payload.posts.length === 0:
					// no posts in Queue: success path, stops Que Routine task
					if (scheduler.getById(task_id).getStatus()) {
						// task does exist, and is paused since no posts
						scheduler.getById(task_id).stop();
						getModOnlyFromClient(client).send({
							embeds: [queRoutineSuccessEmbed(response.message)],
							content: 'Queue Paused: add items queue with: `/que`',
						});
					} else {
						// task does not currently exist and will need to be created/started
						getModOnlyFromClient(client).send({
							content: 'No Queue task is currently running start one by using `/start-que-routine`',
						});
					}
					break;

				case payload.posts.length >= 1:
					// Normal Que Routine success path: iterate and send posts
					payload.posts.forEach((post) => {
						let targetChannel = client.channels.cache.get(post.target) as unknown as TextChannel;
						targetChannel.send(post.body);
					});
					// send success message to moderator_only channel
					getModOnlyFromClient(client).send({ embeds: [queRoutineSuccessEmbed(response.message)] });
					break;

				default:
					break;
			}
			//sends notice to console
			devConsoleMessage(response.message);
		},
		(error) => {
			devConsoleMessage(error.message);
			getModOnlyFromClient(client).send({ embeds: [queRoutineFailEmbed(error)] });
		}
	);
};

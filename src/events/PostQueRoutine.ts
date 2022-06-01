import axios from 'axios';
import { Collection, MessageEmbed, TextChannel } from 'discord.js';
import type { QueRoutineResponseData } from '../interfaces/_index';
import { requestUrl } from '../utils/_index';
import config from '../utils/dev/config';

let { mod } = config;

export const PostQueRoutine = (Guilds: Collection<string, TextChannel>) => {
	let defaultInterval = 10000;

	let errorNoticeEmbed = (error: any) =>
		new MessageEmbed()
			.setTitle('Error response message:')
			.setDescription(`${error}`)
			.setAuthor({ name: 'Quebert encountered in error in the PostQueRoutine' })
			.setFooter({ text: 'Please contact your server admin or report this issue directly on the github' });

	let successNoticeEmbed = (message: string) =>
		new MessageEmbed().setTitle('Que posted successfully').setDescription(`${message}`);

	const routine = async () => {
		try {
			let queResponse: QueRoutineResponseData = await axios
				.get(requestUrl(`/call-que-routine`))
				.then((response) => {
					return response.data;
				})
				.catch((error) => {
					return error;
				});

			queResponse.que.forEach((post) => {
				let targetGuild = Guilds.get(post.target)!;
				targetGuild.send({ content: post.body });
			});
			Guilds.get(mod)!.send({ embeds: [successNoticeEmbed(queResponse.message)] });
		} catch (error) {
			Guilds.get(mod)!.send({ embeds: [errorNoticeEmbed(error)] });
		}
	};

	setInterval(routine, defaultInterval);
};

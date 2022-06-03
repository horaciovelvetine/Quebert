import axios from 'axios';
import { Collection, MessageEmbed, TextChannel } from 'discord.js';
import { requestUrl } from '../utils/_index';
import config from '../utils/dev/config';

let { mod } = config;

export const PostQueRoutine = (Guilds: Collection<string, TextChannel>) => {
	//60000 ms = 1 min
	let defaultInterval = 180000;

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
			let queResponse = await axios
				.get(requestUrl(`/call-que-routine`))
				.then((response) => {
					return response.data;
				})
				.catch((error) => {
					return error;
				});
			queResponse.postsToSend.forEach((post: PostToSend) => {
				
			});
			Guilds.get(mod)!.send({ embeds: [successNoticeEmbed(queResponse.message)] });
		} catch (error) {
			Guilds.get(mod)!.send({ embeds: [errorNoticeEmbed(error)] });
		}
	};
	setTimeout(routine, 180000)
	// setInterval(routine, defaultInterval);
};

interface PostToSend {
	guild_id: number;
	status: PostStatus;
	id: number;
	body: string;
	total_interactions: number;
	chat_responses: number;
	total_clicks: number;
	bot_id: number;
	created_at: string;
	updated_at: string;
}

type PostStatus = 'in-que' | 'sent';

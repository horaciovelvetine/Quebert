import axios from 'axios';
import { Collection, MessageEmbed, TextChannel } from 'discord.js';

import config from '../config/config';

let { mod } = config;

// export const PostQueRoutine = (Guilds: Collection<string, TextChannel>) => {
//60000 ms = 1 min
// 	let defaultInterval = 180000;

// 	let errorNoticeEmbed = (error: any) =>
// 		new MessageEmbed()
// 			.setTitle('Error response message:')
// 			.setDescription(`${error}`)
// 			.setAuthor({ name: 'Quebert encountered in error in the PostQueRoutine' })
// 			.setFooter({ text: 'Please contact your server admin or report this issue directly on the github' });

// 	let successNoticeEmbed = (message: string) =>
// 		new MessageEmbed().setTitle('Que posted successfully').setDescription(`${message}`);

// 	const routine = async () => {
// 		try {
// 			let queResponse = await axios
// 				.get(requestUrl(`/call-que-routine`))
// 				.then((response) => {
// 					return response.data;
// 				})
// 				.catch((error) => {
// 					return error;
// 				});
// 			queResponse.postsToSend.forEach((post: PostToSend) => {
// 				Guilds.get(post.text_channel_id)?.send({content: post.body})
// 			});
// 			Guilds.get(mod)!.send({ embeds: [successNoticeEmbed(queResponse.message)] });
// 		} catch (error) {
// 			Guilds.get(mod)!.send({ embeds: [errorNoticeEmbed(error)] });
// 		}
// 	};
// 	setInterval(routine, defaultInterval);
// };

// interface PostToSend {
// 	text_channel_id: string;
// 	status: PostStatus;
// 	id: string;
// 	body: string;
// }

// type PostStatus = 'in-que' | 'sent';

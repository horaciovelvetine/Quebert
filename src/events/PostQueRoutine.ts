import axios from 'axios';
import { MessageEmbed } from 'discord.js';
import { requestUrl } from '../utils/_index';

export const PostQueRoutine = () => {
	let defaultInterval = 10000;

	interface RoutineQueReponse {}

	let errorNoticeEmbed = (error: any) =>
		new MessageEmbed()
			.setTitle('Error response message:')
			.setDescription(`${error}`)
			.setAuthor({ name: 'Quebert encountered in error in the PostQueRoutine' })
			.setFooter({ text: 'Please contact your server admin or report this issue directly on the github' });

	const routine = async () => {
		try {
			//! START: define the object returned as a part of the Que...
			//? needs to return an array of Posts containing a body and targetId
			// TODO1 Inform backend of Guilds on startup
			// TODO2 Iterate over que from backend (of id's) and send them to associated client channels
			let queResponse: RoutineQueReponse = await axios
				.get(requestUrl(`/call-que-routine`))
				.then((response) => {
					return response.data;
				})
				.catch((error) => {
					return error;
				});
			return queResponse;
		} catch (error) {
			return errorNoticeEmbed(error);
		}
	};

	//for setInterval later changes
	// let resetInterval = (interval: typeof intervalId) => {
	// 	clearInterval(interval);
	// 	intervalId = setInterval(routine, defaultInterval);
	// };

	let intervalId = setInterval(routine, defaultInterval);
};

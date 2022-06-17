import axios from 'axios';
import type { CommandInteraction } from 'discord.js';
import { baseUrlFormatter } from '.';
import { modOnlyGuild } from '../config';
import { errorEmbed } from '../messages';

export const postSlashCommand = async (command: string, payload: any, interaction: CommandInteraction) => {
	try {
		return await axios
			.post(baseUrlFormatter(`/slash-command/${command}`), payload)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				modOnlyGuild(interaction).send({ embeds: [errorEmbed(error, interaction.user.username)] });
			});
	} catch (error) {
		modOnlyGuild(interaction).send({ embeds: [errorEmbed(error, interaction.user.username)] });
	}
};

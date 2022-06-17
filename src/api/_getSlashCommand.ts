import axios from 'axios';
import type { CommandInteraction } from 'discord.js';
import { baseUrlFormatter } from '.';
import { modOnlyGuild } from '../config';
import { errorEmbed } from '../messages';

export const getSlashCommand = async (interaction: CommandInteraction, command: string) => {
	try {
		return await axios
			.get(baseUrlFormatter(`/slash-command/${command}`))
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


import { SlashCommandBuilder } from '@discordjs/builders';

import { postSlashCommand } from '../api';
import { modOnlyGuild } from '../config';
import { addQueEmbed } from '../messages';
import type { SlashCommandInt } from '../interfaces';
import { initQueRoutine } from '../jobs';

export const que: SlashCommandInt = {
	data: new SlashCommandBuilder()
		.setName('que')
		.setDescription('Add a message to the Queue')
		.addChannelOption((opt) => opt.setName('target-channel').setDescription('Channel target').setRequired(true))
		.addStringOption((opt) => opt.setName('msg-body').setDescription('Message body').setRequired(true)),
	run: async (interaction, queScheduler, guilds) => {
		let targetGuild = interaction.options.getChannel('target-channel')!;
		let body = interaction.options.getString('msg-body')!;
		let target = targetGuild.name;

		const response = await postSlashCommand({
			command: 'que',
			payload: {
				id: interaction.id,
				body: body,
				target: targetGuild,
			},
		});

		let task = queScheduler.getById('QueRoutine');
		let successEmbed = addQueEmbed(interaction, { body, target });
		let { time_of_last, time_to_next } = { ...response.payload };

		// check on current status of QueRoutine and handle...
		if (!task) { //task stopped, re-init...
			initQueRoutine(guilds, queScheduler);
			modOnlyGuild(interaction).send({
				embeds: [successEmbed],
				content: `Queue routine re-initialized. Last: ${time_of_last}. Next: ${time_to_next}`,
			});
		} else if (task.getStatus() === 'running') { //normal-route
			modOnlyGuild(interaction).send({
				embeds: [successEmbed],
				content: `Last: ${time_of_last}. Next: ${time_to_next}`,
			});
		} else if (task.getStatus() === 'stopped') { //restart after empty paused
			queScheduler.startById('QueRoutine');
			modOnlyGuild(interaction).send({
				embeds: [successEmbed],
				content: `Queue routine restarted. Last: ${time_of_last}. Next: ${time_to_next}`,
			});
		}

		// preview sent, ephemeral reply to poster
		interaction.reply({ content: `${response.message}`, ephemeral: true });
	},
};

// external lib imports
import type { Message } from 'discord.js';

//config & .env needs
import config from '../config/config';
let { client_id } = config;

// lib
import { parseQuebertMention, parseHelpEmbedResponse, pingMods } from '../utils';
import { atQuebertEmbed, collabInfoEmbed, contributeInfoEmbed, helpInfoEmbed, verifyInfoEmbed } from '../messages';

export async function messageCreationHandler(message: Message<boolean>) {
	try {
		// Reply to @Quebert
		if (parseQuebertMention(message.content) === client_id) {
			await message.reply({ embeds: [atQuebertEmbed()] });
		}
		// Embeded info responses
		if (parseHelpEmbedResponse(message.content)) {
			let messageEmbed = () => {
				switch (parseHelpEmbedResponse(message.content)) {
					case '!help':
						return helpInfoEmbed();
					case '!contribute':
						return contributeInfoEmbed();
					case '!collab':
						return collabInfoEmbed();
					case '!verify':
						return verifyInfoEmbed();
					default:
						return atQuebertEmbed();
				}
			};

			await message.reply({ embeds: [messageEmbed()] });
		}
		// Embeded ping a moderator response
		if (pingMods(message.content)) {
			await message.reply({ content: 'Notifying the mod team! <@934481537263624242>' });
		}
	} catch (error) {
		await message.reply({ content: `${error}` });
	}

	return;
}

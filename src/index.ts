// config & lib imports
import config, { clientDetails } from './config/config';
import { Client } from 'discord.js';
import { ToadScheduler } from 'toad-scheduler';

//types
import type { Collection, TextChannel } from 'discord.js';
import type { CombinedCommandsInt } from './interfaces';

//lib
import { deploySlashCommands } from './config';
import { initQueRoutine } from './jobs';
import { parseQuebertMention, parseHelpEmbedResponse, pingMods } from './utils';
import { atQuebertEmbed, collabInfoEmbed, contributeInfoEmbed, helpInfoEmbed, verifyInfoEmbed } from './messages';

//get api token, init ToadScheduler
const { token, client_id } = config;
const queScheduler = new ToadScheduler();
const client = new Client(clientDetails());
let slashCommands: CombinedCommandsInt[];

//TODO: remove need for this inside ea. command, can be pulled from client
let guilds: Collection<string, TextChannel>;

client.on('ready', async () => {
	guilds = client.channels.cache.filter((channel) => channel.type === 'GUILD_TEXT') as unknown as Collection<
		string,
		TextChannel
	>;
	slashCommands = await deploySlashCommands();
	initQueRoutine(guilds, queScheduler);
	console.log(`Quebert is Logged in and ready`);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	// SLASH COMMAND INTERACTION
	try {
		for (const command of slashCommands) {
			if (interaction.commandName === command.data.name) {
				await command.run(interaction, queScheduler, guilds);
			}
		}
	} catch (error) {
		await interaction.reply({ content: `${error}`, ephemeral: true });
	}
});

client.on('messageCreate', async (message) => {
	// All message handlers: messages to which Quebert responds
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
});

client.login(token);

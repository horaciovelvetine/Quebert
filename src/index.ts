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
import { atQuebertEmbed } from './messages/embeds/_atQuebert';

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
	// QUEBERT MENTION HANDLER
	if (!parseQuebertMention(message.content) && !parseHelpEmbedResponse(message.content)) return;

	// Reply to @Quebert
	if (parseQuebertMention(message.content) === client_id) {
		await message.reply({ embeds: [atQuebertEmbed()] });
	}

	if (parseHelpEmbedResponse(message.content)) {
		await message.reply({ embeds: [parseHelpEmbedResponse(message.content)!] });
	}

	if (pingMods(message.content)) {
		await message.reply({ content: pingMods(message.content) });
	}

	return;
});

client.login(token);

// config & lib
import config, { clientDetails } from './config/config';
import type { Collection, Interaction, TextChannel } from 'discord.js';
import { Client } from 'discord.js';
import { deploySlashCommands } from './config';
import { ToadScheduler } from 'toad-scheduler';
import type { CombinedCommandsInt } from './interfaces';
import { initQueRoutine } from './jobs';

const { token } = config;
const queScheduler = new ToadScheduler();

const client = new Client(clientDetails());

let slashCommands: CombinedCommandsInt[];
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

client.on('interactionCreate', async (interaction: Interaction) => {
	if (!interaction.isCommand()) return;

	try {
		for (const command of slashCommands) {
			if (interaction.commandName === command.data.name) {
				await command.run(interaction, queScheduler, guilds);
			}
		}
	} catch (error) {
		console.log(error);
		await interaction.reply({ content: `${error}`, ephemeral: true });
	}
});

client.login(token);

// config & lib
import config, { clientDetails } from './config/config';
import { Client, Collection, Interaction, TextChannel } from 'discord.js';
import { deploySlashCommands } from './config';
import { ToadScheduler } from 'toad-scheduler';
import type { CombinedCommandsInt } from './interfaces';
import { initQueRoutine } from './jobs';


const { token } = config;
const queScheduler = new ToadScheduler();

const client: Client = new Client(clientDetails());


let slashCommands: CombinedCommandsInt[];
let guilds: Collection<string, TextChannel>;

client.on('ready', async () => {
	guilds = client.channels.cache.filter((channel) => channel.type === 'GUILD_TEXT') as unknown as Collection<
		string,
		TextChannel
	>;
	slashCommands = await deploySlashCommands();
	initQueRoutine(guilds, queScheduler)
	console.log(`Quebert is Logged in and ready`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
	if (interaction.isCommand()) {
		for (const Command of slashCommands) {
			if (interaction.commandName === Command.data.name) {
				try {
					await Command.run(interaction);
				} catch (err) {
					interaction.reply({ content: `${err}`, ephemeral: true });
				}
			}
		}
	}
});

client.login(token);

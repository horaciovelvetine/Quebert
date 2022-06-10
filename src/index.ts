// config & lib
import config, { clientDetails } from './utils/dev/config';
import { Client, Collection, Interaction, TextChannel } from 'discord.js';
import { sendAlertToConsole, DeployCommands } from './utils/_index';
import type { CombinedCommands } from './interfaces/_index';
import { InitializeGuilds, PostQueRoutine } from './events';

const { token } = config;

const client: Client = new Client(clientDetails());

let SlashCommands: CombinedCommands[];
let Guilds: Collection<string, TextChannel>;

client.on('ready', async () => {
	Guilds = client.channels.cache.filter((channel) => channel.type === 'GUILD_TEXT') as unknown as Collection<
		string,
		TextChannel
	>;
	await InitializeGuilds(Guilds);
	SlashCommands = await DeployCommands();
	PostQueRoutine(Guilds)
	sendAlertToConsole(`Quebert is Logged in and ready`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
	if (interaction.isCommand()) {
		for (const Command of SlashCommands) {
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

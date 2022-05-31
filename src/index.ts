// config & lib
import config, { clientDetails } from './utils/dev/config';
import { Client, Interaction } from 'discord.js';
import { sendAlertToConsole, DeployCommands } from './utils/_index';
import type { CombinedCommands } from './interfaces/_index';

const { token } = config;

const client: Client = new Client(clientDetails());

// on ready builds all slash commands
let SlashCommands: CombinedCommands[] = [];
client.on('ready', async () => {
	SlashCommands = await DeployCommands();
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

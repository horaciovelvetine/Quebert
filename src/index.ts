// config & lib
import config, { clientDetails } from './config';
import { Client, Interaction } from 'discord.js';
import { sendAlertToConsole, DeployCommands } from './utils/_index';
import type { Command } from './interfaces/_index'



const { token } = config;
let SlashCommands: Command[] = []
const client: Client = new Client(clientDetails());

client.on('ready', async () => {
  SlashCommands = await DeployCommands()
  sendAlertToConsole(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});

client.on('interactionCreate', async (interaction: Interaction) => {

  if (interaction.isCommand()) {
    for (const Command of SlashCommands) {
      if (interaction.commandName === Command.data.name) {
        await Command.run({ interaction })

      }
    }
  }
})

client.login(token);

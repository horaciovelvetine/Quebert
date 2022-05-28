// config & lib
import config, {clientDetails} from './config';
import { Client, Interaction, Collection } from 'discord.js';
import { sendMsgToConsole, SendPostsFromQue } from './utils';
import { DeployCommands } from './commands/index';
import type { Command } from './interfaces\'

// .env vars
const { token } = config;


// temp (Model Candidates? Likely to change with the DB add?)
let SlashCommands: Command[] = []

const client: Client = new Client(clientDetails());

client.on('ready', async () => {
  SlashCommands = await DeployCommands()
  sendMsgToConsole(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
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

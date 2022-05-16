import { Client, Interaction } from 'discord.js';
import config from './config';
import { DeployCommands } from './commands/index';
import type { Command } from './interfaces/Command';
import { sendMsgToConsole } from './utils';

const { token } = config;
let SlashCommands: Command[] = []

const client: Client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  presence: {
    status: 'online',
    activities: [{
      name: `@me for info!`,
      type: 'LISTENING'
    }]
  },
});

client.on('ready', async () => {
  SlashCommands = await DeployCommands()
  sendMsgToConsole(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
  console.log(interaction)
  console.log(SlashCommands)
  // if (interaction.isCommand()) {
  //   for (const Command of allSlashCommands)
  // }
});

client.login(token);

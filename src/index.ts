// config 
import config from './config';
import { Client, Interaction, Collection } from 'discord.js';
import { sendMsgToConsole } from './utils';
import { DeployCommands } from './commands/index';
// int
import type { Command } from './interfaces/Command';
import type { PostQue } from './interfaces/PostQue';

// .env vars
const { token } = config;

// temp 
let SlashCommands: Command[] = []
let Channels = new Collection()
let ModOnly: any
let PostQue: PostQue = { postsInQue: [], posted: [] }


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
  Channels = await client.guilds.cache.first()!.channels.cache
  ModOnly = Channels.find((c) => c.name! === 'moderator-only')

  sendMsgToConsole(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    for (const Command of SlashCommands) {
      if (interaction.commandName === Command.data.name) {
        
        await Command.run({ interaction, PostQue, ModOnly })
      }
    }
  }
})


client.login(token);

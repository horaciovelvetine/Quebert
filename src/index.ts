// config & lib
import config from './config';
import { Client, Interaction, Collection } from 'discord.js';
import { sendMsgToConsole, SendPostsFromQue } from './utils';
import { DeployCommands } from './commands/index';
import type { Command, PostQue } from './interfaces/'

// .env vars
const { token } = config;

// temp (Model Candidates? Likely to change with the DB add?)
let SlashCommands: Command[] = []
let Channels = new Collection()
let ModOnly: any
let PostQue: PostQue = { postsInQue: [] }
let Interval: string = '60000'

function clearPostQue(){
  PostQue.postsInQue = []
}

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
  Channels = client.guilds.cache.first()!.channels.cache
  ModOnly = Channels.find((c) => c.name! === 'moderator-only')
  sendMsgToConsole(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    for (const Command of SlashCommands) {
      if (interaction.commandName === Command.data.name) {

        await Command.run({ interaction, PostQue, ModOnly, Interval, clearPostQue })
      }
    }
  }
})

setInterval(SendPostsFromQue, parseInt(Interval), { PostQue, client})

client.login(token);

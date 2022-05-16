import { Client, Collection } from 'discord.js';
import config from './config';
import { DeployCommands } from './commands/index';

const { token } = config;
let COMMANDS = new Collection(); 

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  presence: {
    status: 'online',
    activities: [{
      name: `@me for helpful info`,
      type: 'LISTENING'
    }]
  },
});


DeployCommands()

client.on('ready', () => {
  console.log(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});

client.on('interactionCreate', async (interaction) => {
  // if @Quebert should run reply with some helpful info
  // if (interaction.isCommand()) return;
  // let command = client.


});

client.login(token);

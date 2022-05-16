import { Client, Interaction, Guild } from 'discord.js';
import config from './config';
import { DeployCommands } from './commands/index';
import type { Command } from './interfaces/Command';
import { sendMsgToConsole } from './utils';

const { token } = config;
let SlashCommands: Command[] = []
// let ModeratorOnly: Guild

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
  // ModeratorOnly! = client.guilds.cache.first()!.channels.cache.filter( c => c.name === 'moderator-only')
  console.log(client.guilds.cache)

  sendMsgToConsole(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    for (const Command of SlashCommands) {
      if (interaction.commandName === Command.data.name) {
        await Command.run(interaction)
      }
    }
  await interaction.reply({content: 'Command not found.', ephemeral: true})
  }

  
})

client.login(token);

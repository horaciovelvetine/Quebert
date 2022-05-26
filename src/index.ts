// config & lib
import config, {clientDetails} from './config';
import { Client, Interaction } from 'discord.js';
import { sendMsgToConsole } from './utils';
import { DeployCommands } from './commands';
import type { Command } from './interfaces'
const Database = require("@replit/database")


const { token } = config;

const db:any = new Database()

db.set("interval", "5000");
db.set("que", []);
db.set("stats", {"totalPostsMade": 0, "channelsPostsMade": []});

let SlashCommands: Command[] = []
const client: Client = new Client(clientDetails());

client.on('ready', async () => {
  SlashCommands = await DeployCommands()
  sendMsgToConsole(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
  console.log(db.list().then(k => console.log(k)))
});

client.on('interactionCreate', async (interaction: Interaction) => {
  
  if (interaction.isCommand()) {
    for (const Command of SlashCommands) {
      if (interaction.commandName === Command.data.name) {

        await Command.run({interaction, db})
      }
    }
  }
})

// setInterval(SendPostsFromQue, parseInt(Interval), { PostQue, client})

client.login(token);

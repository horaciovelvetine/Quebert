import { Client } from 'discord.js';
import config from './config';
import helpCommand from './commands';

const { prefix, token } = config;

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



client.on('ready', () => {
  console.log(`Quebert is Logged in and ready, use (ctrl + c) to end his... life?`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift();

    switch(command) {
      case 'ping':
        const msg = await message.reply('Pinging...');
        await msg.edit(`Pong! The round trip took ${Date.now() - msg.createdTimestamp}ms.`);
        break;

      case 'say':
      case 'repeat':
        if (args.length > 0) await message.channel.send(args.join(' '));
        else await message.reply('You did not send a message to repeat, cancelling command.');
        break;

      case 'help':
        const embed = helpCommand(message);
        embed.setThumbnail(client.user!.displayAvatarURL());
        await message.channel.send({ embeds: [embed] });
        break;
    }
  }
});

client.login(token);

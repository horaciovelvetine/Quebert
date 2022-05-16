"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const config_1 = tslib_1.__importDefault(require("./config"));
const index_1 = require("./commands/index");
const utils_1 = require("./utils");
const { token } = config_1.default;
let SlashCommands = [];
// let ModeratorOnly: Guild
const client = new discord_js_1.Client({
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
    SlashCommands = await (0, index_1.DeployCommands)();
    // ModeratorOnly! = client.guilds.cache.first()!.channels.cache.filter( c => c.name === 'moderator-only')
    console.log(client.guilds.cache);
    (0, utils_1.sendMsgToConsole)(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});
client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        for (const Command of SlashCommands) {
            if (interaction.commandName === Command.data.name) {
                await Command.run(interaction);
            }
        }
        await interaction.reply({ content: 'Command not found.', ephemeral: true });
    }
});
client.login(token);
//# sourceMappingURL=index.js.map
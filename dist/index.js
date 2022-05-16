"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const config_1 = tslib_1.__importDefault(require("./config"));
const index_1 = require("./commands/index");
const { token } = config_1.default;
let SlashCommands = [];
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
    console.log(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});
client.on('interactionCreate', async (interaction) => {
    console.log(interaction);
    console.log(SlashCommands);
    // if (interaction.isCommand()) {
    //   for (const Command of allSlashCommands)
    // }
});
client.login(token);
//# sourceMappingURL=index.js.map
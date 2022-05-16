"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// config 
const config_1 = tslib_1.__importDefault(require("./config"));
const discord_js_1 = require("discord.js");
const utils_1 = require("./utils");
const index_1 = require("./commands/index");
// .env vars
const { token } = config_1.default;
// temp 
let SlashCommands = [];
let Channels = new discord_js_1.Collection();
let ModOnly;
let PostQue = { postsInQue: [], posted: [] };
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
    Channels = await client.guilds.cache.first().channels.cache;
    ModOnly = Channels.find((c) => c.name === 'moderator-only');
    (0, utils_1.sendMsgToConsole)(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});
client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        for (const Command of SlashCommands) {
            if (interaction.commandName === Command.data.name) {
                await Command.run({ interaction, PostQue, ModOnly });
            }
        }
    }
});
client.login(token);
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const config_1 = tslib_1.__importDefault(require("./config"));
const index_1 = require("./commands/index");
const { token } = config_1.default;
let COMMANDS = new discord_js_1.Collection();
const client = new discord_js_1.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    presence: {
        status: 'online',
        activities: [{
                name: `@me for helpful info`,
                type: 'LISTENING'
            }]
    },
});
(0, index_1.DeployCommands)();
client.on('ready', () => {
    console.log(`Quebert is Logged in and ready, use (ctrl + c) to end this process.`);
});
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand())
        return;
    let command = COMMANDS.get(interaction.commandName);
    if (!command)
        return;
    try {
        await command.execute(interaction);
    }
    catch (err) {
        console.error(err);
        await interaction.reply({ content: 'Something went wrong, try again...', ephemeral: true });
    }
});
client.login(token);
//# sourceMappingURL=index.js.map
// config & external lib imports
import config, { clientDetails } from './config/config';
import { Client } from 'discord.js';
import { ToadScheduler } from 'toad-scheduler';

//types
import type { Collection, TextChannel } from 'discord.js';
import type { COMBINED_COMMANDS } from './interfaces';

//lib
import { interactionCreateHandler, messageCreationHandler, onReadyHandler } from './client';
import { devConsoleMessage } from './messages';

//get api token, init ToadScheduler
const { token } = config;
const jobsSchedulerClient = new ToadScheduler();

// creates discord.js client
const client = new Client(clientDetails());

// needed vars for Quebert to reference
let slashCommands: COMBINED_COMMANDS[];

client.on('ready', async () => {
	// deploys slash commands, begins and sets up que routine
	onReadyHandler({ slashCommands, jobsSchedulerClient, client });
	devConsoleMessage(`Quebert is Logged in and ready`);
});

client.on('interactionCreate', async (interaction) => {
	// Handles all interactions: currently only slash commands
	interactionCreateHandler({ interaction, jobsSchedulerClient, slashCommands });
	return;
});

client.on('messageCreate', async (message) => {
	// Handles all messages to which Quebert responds
	if (!message.content) return;
	messageCreationHandler(message);
	return;
});

client.login(token);

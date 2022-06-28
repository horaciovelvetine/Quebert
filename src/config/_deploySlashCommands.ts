import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import config from './config';
import type { CombinedCommandsInt } from '../interfaces';
import {
	que,
	status,
	clearLast,
	clearPost,
	setCronfig,
	currentCronfig,
	startQueRoutine,
	stopQueRoutine,
	pauseQueRoutine,
} from '../commands';

const { token, client, guild } = config;
const rest = new REST({ version: '9' }).setToken(token);

let AllSlashCommands = [
	que,
	status,
	clearLast,
	clearPost,
	setCronfig,
	currentCronfig,
	startQueRoutine,
	stopQueRoutine,
	pauseQueRoutine,
];

export const deploySlashCommands = async (): Promise<CombinedCommandsInt[]> => {
	try {
		console.log(`Updating Quebert's slash (/) commands...`);
		await rest.put(Routes.applicationGuildCommands(client!, guild!), {
			body: AllSlashCommands.map((c) => c.data.toJSON()),
		});
		console.log(`Commands successfully updated.`);
		return AllSlashCommands;
	} catch (error) {
		console.log(error);
	}
	return AllSlashCommands;
};

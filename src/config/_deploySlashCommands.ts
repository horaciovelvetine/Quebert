import config from './config';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
// import { AllSlashCommands } from './_index'; ==> 

import type { CombinedCommands } from '../interfaces/_index';

const { token, client, guild } = config;

const rest = new REST({ version: '9' }).setToken(token!);

export const deploySlashCommands = async (): Promise<CombinedCommands[]> => {
	try {
		console.log(`Updating Quebert's slash (/) commands...`);
		await rest.put(Routes.applicationGuildCommands(client!, guild!), {
			body: AllSlashCommands.map((c) => c.data.toJSON()),
		});
		console.log(`Commands successfully updated.`);
		return AllSlashCommands;
	} catch (error) {
		console.log(AllSlashCommands);
		console.log(error);
	}
	return AllSlashCommands;
};

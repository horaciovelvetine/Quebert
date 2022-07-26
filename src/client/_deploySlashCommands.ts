// external libs
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

// lib & config
import config from '../config/config';
import { AllSlashCommands } from '../commands';
import { devConsoleMessage } from '../messages';

// interfaces
import type { CombinedCommandsInt } from '../interfaces';

const { token, client_id, guild } = config;
const rest = new REST({ version: '9' }).setToken(token);

export const deploySlashCommands = async (): Promise<CombinedCommandsInt[]> => {
	try {
		devConsoleMessage(`Updating Quebert's slash (/) commands...`);
		await rest.put(Routes.applicationGuildCommands(client_id!, guild!), {
			body: AllSlashCommands.map((c) => c.data.toJSON()),
		});
		devConsoleMessage(`Commands successfully updated.`);
		return AllSlashCommands;
	} catch (error) {
		devConsoleMessage(error);
	}
	return AllSlashCommands;
};

import type { CommandInteraction } from 'discord.js';
import { getModOnlyFromClient } from './_fromClient';

export const getModOnlyFromInteraction = (interaction: CommandInteraction) => {
	return getModOnlyFromClient(interaction.client);
};

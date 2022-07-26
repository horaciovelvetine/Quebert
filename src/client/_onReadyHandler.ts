import type { Client, Collection, TextChannel } from 'discord.js';
import type { CombinedCommandsInt } from '../interfaces';
import type { ToadScheduler } from 'toad-scheduler';
import { deploySlashCommands } from './_deploySlashCommands';
import { initQueRoutine } from '../jobs';

interface ON_READY_PROPS {
	guilds: Collection<string, TextChannel>;
	slashCommands: CombinedCommandsInt[];
	queScheduler: ToadScheduler;
	client: Client;
}

export async function onReadyHandler({ guilds, slashCommands, queScheduler, client }: ON_READY_PROPS) {
	guilds = client.channels.cache.filter((channel) => channel.type === 'GUILD_TEXT') as unknown as Collection<
		string,
		TextChannel
	>;
  slashCommands = await deploySlashCommands();
  initQueRoutine(guilds, queScheduler);
}

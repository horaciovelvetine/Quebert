import type { SlashCommandSubcommandsOnlyBuilder, SlashCommandBuilder } from '@discordjs/builders';
import type { Collection, CommandInteraction, TextChannel } from 'discord.js';
import type { ToadScheduler } from 'toad-scheduler';

export interface SlashCommandInt {
	data: Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;
	run: (
		interaction: CommandInteraction,
		queScheduler: ToadScheduler,
		guilds: Collection<string, TextChannel>
	) => Promise<void>;
}

export interface SlashCommandSubCommandInt {
	data: SlashCommandSubcommandsOnlyBuilder | SlashCommandBuilder;
	run: (
		interaction: CommandInteraction,
		queScheduler: ToadScheduler,
		guilds: Collection<string, TextChannel>
	) => Promise<void>;
}

export type CombinedCommandsInt = SlashCommandInt | SlashCommandSubCommandInt;

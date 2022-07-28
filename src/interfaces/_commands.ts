import type { SlashCommandSubcommandsOnlyBuilder, SlashCommandBuilder } from '@discordjs/builders';
import type { CacheType, CommandInteraction } from 'discord.js';
import type { ToadScheduler } from 'toad-scheduler';

export interface SLASH_COMMAND {
	data: Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;
	run: (interaction: CommandInteraction<CacheType>, jobsSchedulerClient?: ToadScheduler) => Promise<void>;
}

export interface SLASH_W_SUB_COMMANDS {
	data: SlashCommandSubcommandsOnlyBuilder | SlashCommandBuilder;
	run: (interaction: CommandInteraction<CacheType>, jobsSchedulerClient?: ToadScheduler) => Promise<void>;
}

export type COMBINED_COMMANDS = SLASH_COMMAND | SLASH_W_SUB_COMMANDS;



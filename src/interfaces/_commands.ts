import type { SlashCommandSubcommandsOnlyBuilder, SlashCommandBuilder } from '@discordjs/builders';
import type { CommandInteraction } from 'discord.js';

export interface SlashCommandInt {
	data: Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;
	run: (interaction: CommandInteraction) => Promise<void>;
}

export interface SlashCommandSubCommandInt {
	data: SlashCommandSubcommandsOnlyBuilder | SlashCommandBuilder;
	run: (interaction: CommandInteraction) => Promise<void>;
}

export type CombinedCommandsInt = SlashCommandInt | SlashCommandSubCommandInt;

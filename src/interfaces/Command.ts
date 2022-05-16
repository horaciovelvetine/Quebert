import type { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from '@discordjs/builders'
import type { CommandInteraction } from 'discord.js'

export interface Command {
  data: Omit<SlashCommandBuilder, "addSubCommandGroup" | "addSubcommand"> | SlashCommandSubcommandsOnlyBuilder;
  run: (interaction: CommandInteraction) => Promise<void>;
}
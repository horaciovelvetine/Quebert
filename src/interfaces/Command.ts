import type { SlashCommandSubcommandsOnlyBuilder, SlashCommandBuilder } from '@discordjs/builders'
import type { CommandInteraction } from 'discord.js'

export interface Command {
  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  run: (interaction: CommandInteraction) => Promise<void>;
}

export interface CommandSubCommand {
  data: SlashCommandSubcommandsOnlyBuilder | SlashCommandBuilder;
  run: (interaction: CommandInteraction) => Promise<void>;
}
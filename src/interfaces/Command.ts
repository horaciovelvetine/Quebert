import type { SlashCommandSubcommandsOnlyBuilder, SlashCommandBuilder } from '@discordjs/builders'
import type { CommandInteraction } from 'discord.js'

export interface Command {
  data: SlashCommandSubcommandsOnlyBuilder | SlashCommandBuilder;
  run: (interaction: CommandInteraction) => Promise<void>;
}

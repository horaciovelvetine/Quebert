import type { SlashCommandBuilder } from '@discordjs/builders'
import type { CommandInteraction } from 'discord.js'

export interface Command {
  data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">;
  run: (interaction: CommandInteraction) => Promise<void>;
}
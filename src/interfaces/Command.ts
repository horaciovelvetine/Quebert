import type { SlashCommandBuilder } from '@discordjs/builders'
import type { CommandInteraction } from 'discord.js'

export interface CmdPayload {
  interaction: CommandInteraction
  db: any
}
export interface Command {
  data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">;
  run: ({ }: CmdPayload) => Promise<void>;
}

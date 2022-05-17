import type { SlashCommandBuilder } from '@discordjs/builders'
import type { CommandInteraction } from 'discord.js'
import type { PostQue } from './PostQue';

export interface CmdPayload {
  interaction: CommandInteraction
  PostQue: PostQue
  Channels: any
  Interval: number
}
export interface Command {
  data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">;
  run: ({ }: CmdPayload) => Promise<void>;
}

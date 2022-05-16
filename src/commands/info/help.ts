import { SlashCommandBuilder } from '@discordjs/builders'
import type { CmdPayload, Command } from '../../interfaces/Command'

export const help: Command = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Helpful information about using Quebert and his features'),
  run: async (payload: CmdPayload) => {
    await payload.interaction.reply({ content: 'This is a helpful message', ephemeral: true })
  }
}
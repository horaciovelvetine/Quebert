import { SlashCommandBuilder } from '@discordjs/builders'
import type { CmdPayload, Command } from '../../interfaces/Command'

export const help: Command = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Helpful information about using Quebert and his features'),
  run: async (payload: CmdPayload) => {

    payload.ModOnly.send({content: `${payload.interaction.user} asked for help`})
    await payload.interaction.reply({ content: 'This (will be) is a helpful message', ephemeral: true })
  }
}
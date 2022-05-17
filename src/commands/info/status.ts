import { SlashCommandBuilder } from '@discordjs/builders'
import type { CmdPayload, Command } from '../../interfaces/Command'

export const status: Command = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription(`Ask Quebert what hes got going on behind the scenes`),
  run: async (payload: CmdPayload) => {
    await payload.interaction.reply({ content: `Posts in Que: ${payload.PostQue.postsInQue.length} // Interval Time (ms): ${payload.Interval}.`, ephemeral: true })
  }

}
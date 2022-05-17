import { SlashCommandBuilder } from "@discordjs/builders";

import type { CmdPayload, Command } from "../../interfaces/Command";

export const clearLast: Command = {
  data: new SlashCommandBuilder()
    .setName('clear-last')
    .setDescription(`Clear the last post added to the Que.`),
  run: async (payload: CmdPayload) => {
    payload.PostQue.postsInQue.pop()
    await payload.interaction.reply({ content: `Don't worry, I'll take that last one out of the Que for you`, ephemeral: true })
  }
}
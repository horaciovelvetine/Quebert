import { SlashCommandBuilder } from "@discordjs/builders";
import type { CmdPayload, Command } from "../../interfaces/Command";

export const clear: Command = {
  data: new SlashCommandBuilder()
    .setName('clear-all')
    .setDescription(`Clears all posts that are currently in the que`),
  run: async (payload: CmdPayload) => {
    payload.clearPostQue()
    await payload.interaction.reply({ content: `${payload.interaction.user.username} cleared all posts from the Que!`, ephemeral: true })
  }
}
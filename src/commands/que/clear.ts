import { SlashCommandBuilder } from "@discordjs/builders";
import type { CmdPayload, Command } from "../../interfaces/Command";

export const clear: Command = {
  data: new SlashCommandBuilder()
    .setName('clear-all')
    .setDescription(`Clears all posts that are currently in the que`),
  run: async (payload: CmdPayload) => {
    await payload.interaction.reply({ content: 'Gonna add stuff to the Que.... later', ephemeral: true })
  }
}
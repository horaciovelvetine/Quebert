import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";
import type { Command } from "../../interfaces/Command";

export const clearLast: Command = {
  data: new SlashCommandBuilder()
    .setName('clear-last')
    .setDescription(`Clear the last post added to the Que.`),
  run: async (interaction: CommandInteraction) => {
    await interaction.reply({ content: `Don't worry, I'll take that last one out of the Que for you`, ephemeral: true })
  }
}
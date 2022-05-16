import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";
import type { Command } from "../../interfaces/Command";

export const clear: Command = {
  data: new SlashCommandBuilder()
    .setName('clear-all')
    .setDescription(`Clears all posts that are currently in the que`),
  run: async (interaction: CommandInteraction) => {
    await interaction.reply({ content: 'Gonna add stuff to the Que.... later', ephemeral: true })
  }
}
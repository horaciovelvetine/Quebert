import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";
import type { Command } from "../../interfaces/Command";

export const clearById: Command = {
  data: new SlashCommandBuilder()
    .setName('clear-post')
    .setDescription(`Clear a post from the Que based on its ID`)
    .addStringOption((option) => option.setName('post-id')
      .setDescription(`Find the ID in the post preview in the Mod-Only channel.`)
      .setRequired(true)
    ),
  run: async (interaction: CommandInteraction) => {
    await interaction.reply({ content: `Remove post: ${1}`, ephemeral: true })
  }
}
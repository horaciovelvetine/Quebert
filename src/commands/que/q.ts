import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";
import type { Command } from "../../interfaces/Command";

export const q: Command = {
  data: new SlashCommandBuilder()
    .setName('que')
    .setDescription('Add a post to the Que.')
    .addChannelOption(option => option.setName('target-channel')
      .setDescription('Channel to deliver message to')
      .setRequired(true)
    )
    .addStringOption(option => option.setName('posting-url')
      .setDescription('Url content for the post')
      .setRequired(true)
    ),
  run: async (interaction: CommandInteraction) => {
    await interaction.reply({ content: 'Gonna add stuff to the Que.... later', ephemeral: true })
  }
}
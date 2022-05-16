import { SlashCommandBuilder } from '@discordjs/builders'
import type { CommandInteraction } from 'discord.js'
import type { Command } from '../../interfaces/Command'

export const help: Command = {
  data: new SlashCommandBuilder()
  .setName('Help')
  .setDescription('Helpful information about using Quebert and his features'),
  run: async (interaction: CommandInteraction) => {
    await interaction.reply({content: 'This is a helpful message', ephemeral: true})
  }
}
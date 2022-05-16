import { SlashCommandBuilder } from '@discordjs/builders'
import type{ Command } from '../../interfaces/Command'

export const status: Command = {
  data: new SlashCommandBuilder()
  .setName('status')
  .setDescription(`Ask Quebert what hes got going on behind the scenes`),
  run: async (interaction) => {
    await interaction.reply({content: `Honestly... feeling good, as you can see looking good, ready to go!`, ephemeral: true })
  }
  
}
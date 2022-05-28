import { SlashCommandBuilder } from "@discordjs/builders";
import { PostCommand } from "../../utils/api/PostCommand";
import type { CommandInteraction } from "discord.js";
import type { Command } from '../../interfaces/_index'


export const setInterval: Command = {
  data: new SlashCommandBuilder()
    .setName('interval-set')
    .setDescription('Set the interval Quebert waits before sending out messages')
    .addStringOption(opt => opt.setName('interval').setDescription('The desired interval in MS')),
  run: async (interaction: CommandInteraction) => {
    const newInterval = interaction.options.getString('interval')!
    PostCommand({name: 'setInterval', payload: newInterval})
    // Should submit a post request to quebert to change the value of for his interval attribute
  }

}
import { SlashCommandBuilder } from "@discordjs/builders";

import type { CommandInteraction } from 'discord.js'
import type { Command } from "../../interfaces/_index";
import { GetCommand } from "../../utils/api/GetCommand";

export const status: Command = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription(`Ask Quebert how it's going`),
  run: async (interaction: CommandInteraction) => {
    let statusResponse = await GetCommand({name: 'status', payload: 'default'})
    interaction.reply({content: statusResponse, ephemeral: true})
  }

}
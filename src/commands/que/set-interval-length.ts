import { SlashCommandBuilder } from "@discordjs/builders";
import type { Command, CmdPayload } from "../../interfaces/Command";

export const setIntervalLength: Command = {
  data: new SlashCommandBuilder()
    .setName('interval-set')
    .setDescription('Set the amount of time (in MS) Quebert waits between posts')
    .addNumberOption(option => option.setName('time-ms').setDescription('in: MS').setRequired(true)),
  run: async (payload: CmdPayload) => {
    payload.interaction.reply({ content: 'This is inside the SetIntervalLength command' })
  }
}
import { SlashCommandBuilder } from "@discordjs/builders";
import type { CmdPayload, Command } from "../../interfaces/Command";

export const clearById: Command = {
  data: new SlashCommandBuilder()
    .setName('clear-post')
    .setDescription(`Clear a post from the Que based on its ID`)
    .addStringOption((option) => option.setName('post-id')
      .setDescription(`Find the ID in the post preview in the Mod-Only channel.`)
      .setRequired(true)
    ),
  run: async (payload: CmdPayload) => {
    let targetId = payload.interaction.options.getString('post-id')
    let filteredQue = payload.PostQue.postsInQue.filter(post => post.id !== targetId)

    payload.PostQue.postsInQue = filteredQue
    payload.ModOnly.send({ content: `Post: ${targetId} removed from Que by: ${payload.interaction.user.username}` })
    await payload.interaction.reply({ content: `Remove post: ${1}`, ephemeral: true })
  }
}
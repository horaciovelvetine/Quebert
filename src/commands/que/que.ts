import { SlashCommandBuilder } from "@discordjs/builders";
import { NotificationEmbedBuilder, ModOnlyGuild } from "../../utils/_index";

import type { CommandInteraction } from 'discord.js'
import type { Command } from "../../interfaces/_index";



export const que: Command = {
  data: new SlashCommandBuilder()
    .setName('que')
    .setDescription('Add a message to the Queue for Quebert to send later.')
    .addChannelOption(opt => opt.setName('target-channel')
      .setDescription('Channel where Quebert will send messages to.')
      .setRequired(true))
    .addStringOption(opt => opt.setName('msg-body')
      .setDescription('The message body you want to send')
      .setRequired(true)),
    run:async (interaction:CommandInteraction) => {
      let targetGuild = (interaction.options.getChannel('target-channel')!)
      let msgBody = (interaction.options.getString('msg-body')!)
      const addPost = { id: interaction.id, body: msgBody, targetGuild: targetGuild }

      let modEmbedPreviw = NotificationEmbedBuilder(interaction, addPost) 

      await ModOnlyGuild(interaction)!.send({embeds: [modEmbedPreviw]})

      interaction.reply({content: 'Message added to Que', ephemeral: true})
    }
}

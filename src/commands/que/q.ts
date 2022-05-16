import { MessageEmbed } from 'discord.js'
import { SlashCommandBuilder } from "@discordjs/builders";
import type { Command, CmdPayload } from "../../interfaces/Command";
import type { Post } from '../../interfaces/Post';

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
  run: async (payload: CmdPayload) => {
    const target = () => payload.interaction.options.getChannel('target-channel')!
    const postUrl = () => payload.interaction.options.getString('posting-url')!
    const newPost: Post = { id: payload.interaction.id, url: postUrl(), target: target() }

    payload.PostQue.postsInQue.push(newPost)

    let modOnlyPreview = new MessageEmbed().addFields(
      { name: 'Channel Target:', value: `${target().name}` },
      { name: 'Post ID:', value: `${payload.interaction.id}` },
      { name: 'Posting Url:', value: `${postUrl()}` }
    )
      .setTitle('Added a post to the Que:')
      .setAuthor({ name: `${payload.interaction.user.username}` })
    // #15141d , #4d2f72 , #621c44 , #3d152c , #59a8bd, #302844 , #15141d , '#6064a8'


    payload.ModOnly.send({ embeds: [modOnlyPreview] })
    await payload.interaction.reply({ content: 'Message added to Que', ephemeral: true })


  }
}
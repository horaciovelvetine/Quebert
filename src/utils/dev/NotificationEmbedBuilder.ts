import { MessageEmbed } from "discord.js"

//Formats info inteneded for a notification into a discord freindly Embed message for the Mod-Only channel
export const NotificationEmbedBuilder = (interaction: any, addPost: any) => {
  return (new MessageEmbed().addFields(
    { name: 'Target Channel:', value: addPost.targetChannel },
    { name: 'Post ID:', value: addPost.ID },
    { name: 'Message Body:', value: addPost.body },
  )
    .setTitle(`Added a post to the ${addPost.targetChannel.name} channel`)
    .setAuthor({ name: `${interaction.user.username}` }))
}
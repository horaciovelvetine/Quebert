import { SlashCommandBuilder } from "@discordjs/builders";

//types
import type { CommandInteraction } from 'discord.js'
import type { CommandSubCommand } from "../../interfaces/_index";

export const clear: CommandSubCommand = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('remove posts from the queue')
    .addSubcommand(subCommand =>
      subCommand.setName('id')
        .setDescription('remove a post by the id')
        .addStringOption(opt =>
          opt.setName('post-id'))
        .setDescription('the posts id'))
    .addSubcommand(subCommand =>
      subCommand.setName('last')
        .setDescription('remove the last post from the queue'))
    .addSubcommand(subCommand =>
      subCommand.setName('all')
        .setDescription('remove all posts from the queue')),
  run: async (interaction: CommandInteraction) => {
    // TODO: move towards this logic, ephemeral reply was causing typing issues
    // await interaction.client.guilds.filter(guild => guild.id === ENV['MOD_ONLY']).send({content: 'Deleted some stuff'})
    //! This is really just a workaround, it may even 
    await interaction.followUp('Hey Im following up with this, I deleted everything')
  }
}
import { SlashCommandBuilder } from "@discordjs/builders";

//types
import type { CommandInteraction } from 'discord.js'
import type { CommandSubCommand } from "../../interfaces/_index";

export const clear: CommandSubCommand = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Remove posts from the Queue by: ID, Last Added, or All')
    .addSubcommand(subCommand =>
      subCommand.setName('ID')
        .setDescription('Remove post by ID')
        .addUserOption(opt =>
          opt.setName('ID'))
        .setDescription('The Posts ID'))
    .addSubcommand(subCommand =>
      subCommand.setName('Last')
        .setDescription('Remove the last post added to the Queue'))
    .addSubcommand(subCommand =>
      subCommand.setName('All')
        .setDescription('[CAUTION] Removes all posts from the Queue')),
  run: async (interaction: CommandInteraction) => {
    // TODO: move towards this logic, ephemeral reply was causing typing issues
    // await interaction.client.guilds.filter(guild => guild.id === ENV['MOD_ONLY']).send({content: 'Deleted some stuff'})
    //! This is really just a workaround, it may even 
    await interaction.followUp('Hey Im following up with this, I deleted everything')
  }
}
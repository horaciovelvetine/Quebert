import config from '../config';
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { sendMsgToConsole } from '../utils/index'

const { token, client, guild } = config;


const rest = new REST({ version: '9' }).setToken(token!);

export const DeployCommands = async () => {
  try {
    sendMsgToConsole(`Updating Quebert's application (/) commands. Brb.`)
    
    await rest.put(
      Routes.applicationGuildCommands(client!, guild!),
      { body: [] },
    )
    sendMsgToConsole(`Im back and successfully updated Quebert's application (/) commands!`)
  } catch (error) {
    console.error(error)
  }

}


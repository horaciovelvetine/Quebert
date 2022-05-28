import config from './config'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { sendAlertToConsole } from './sendAlertToConsole'

import type { Command } from '../../interfaces/Command'

const {token, client, guild} = config;

const rest = new REST({ version: '9' }).setToken(token!);

export const DeployCommands = async (): Promise<Command[]> => {
  try {
    sendAlertToConsole(`Updating Quebert's application (/) commands. Brb.`)
    await rest.put(
      Routes.applicationGuildCommands(client!, guild!),
      { body: ['see below']}
      //! { body: AllSlashCommands.map(c => c.data.toJSON()) },
    )
    sendAlertToConsole(`Im back and successfully updated Quebert's application (/) commands!`)
    return ([]) //! should be an array of commands, but this may be optional
  } catch (error) {
    console.error(error)
  }
  return([]) //! Same here as above
}
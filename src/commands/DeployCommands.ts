import config from '../utils/dev/config'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { sendAlertToConsole } from '../utils/_index'
import { AllSlashCommands } from './_index'

import type { CombinedCommands } from '../interfaces/_index'

const {token, client, guild} = config;

const rest = new REST({ version: '9' }).setToken(token!);

export const DeployCommands = async (): Promise<CombinedCommands[]> => {
    console.log(token, client, guild)
  try {
    sendAlertToConsole(`Updating Quebert's application (/) commands. Brb.`)
    await rest.put(
      Routes.applicationGuildCommands(client!, guild!),
      { body: AllSlashCommands.map(c => c.data.toJSON()) }
    )
    
    return(AllSlashCommands)
  } catch (error) {
    console.log(error)
  }
  return(AllSlashCommands)
}
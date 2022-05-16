import config from '../config';
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { sendMsgToConsole } from '../utils/index'
import { AllSlashCommands } from './index'
import type { Command } from '../interfaces/Command'

const { token, client, guild } = config;

const rest = new REST({ version: '9' }).setToken(token!);

export const DeployCommands = async (): Promise<Command[]> => {
  try {
    sendMsgToConsole(`Updating Quebert's application (/) commands. Brb.`)
    await rest.put(
      Routes.applicationGuildCommands(client!, guild!),
      { body: AllSlashCommands },
    )
    sendMsgToConsole(`Im back and successfully updated Quebert's application (/) commands!`)
    return (AllSlashCommands)
  } catch (error) {
    console.error(error)
  }
  return (AllSlashCommands)
}


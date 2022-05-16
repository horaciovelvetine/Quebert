export { DeployCommands } from './deploy-commands';
import type { Command } from '../interfaces/Command';
import { status } from './info/status';

export const AllSlashCommands: Command[] = [status]
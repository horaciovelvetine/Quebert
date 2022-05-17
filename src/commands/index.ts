// For discord API's
export { DeployCommands } from './deploy-commands';

import type { Command } from '../interfaces/Command';
// Slash Command(s) Registered on startup
import { status } from './info/status';
import { help } from './info/help';
import { q } from './que/q'
import { clear } from './que/clear'
import { clearById } from './que/clear-by-id'
import { clearLast } from './que/clear-last'

export const AllSlashCommands: Command[] = [status, help, q, clear, clearById, clearLast]
import type { CombinedCommands } from '../interfaces/_index'
import { clear, que, setInterval, status } from './que/'

export const AllSlashCommands: CombinedCommands[] = [clear, que, setInterval, status]
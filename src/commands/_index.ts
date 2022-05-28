import type { CombinedCommands } from '../interfaces/Command'
import { clear, que, setInterval, status } from './que/_index'



export const AllSlashCommands: CombinedCommands[] = [clear, que, setInterval, status]
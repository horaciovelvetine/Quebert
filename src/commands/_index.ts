import type { CombinedCommands } from '../interfaces/_index';
import { clearAll, clearLast, clearById, que, setInterval, status } from './que/';

export const AllSlashCommands: CombinedCommands[] = [status, setInterval, que, clearLast, clearAll, clearById];

import type { CombinedCommands } from '../interfaces/_index';
import { clearQue, clearLast, clearPost, que, setInterval, status } from './que/';

export const AllSlashCommands: CombinedCommands[] = [status, setInterval, que, clearLast, clearPost, clearQue];

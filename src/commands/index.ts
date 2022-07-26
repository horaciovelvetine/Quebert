import { status } from './_status';
import { que } from './_que';
import { clearLast, clearPost } from './clear';
import { setCronfig, currentCronfig } from './cronfig';
import { pauseQueRoutine, startQueRoutine, stopQueRoutine } from './queRoutine';


export const AllSlashCommands = [status, que, clearLast, clearPost, setCronfig, currentCronfig, pauseQueRoutine, startQueRoutine, stopQueRoutine];
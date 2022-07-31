import { status } from './_status';
import { que } from './queRoutine/_que';
import { clearLast, clearPost } from './queRoutine/clear';
import { setCronfig, currentCronfig } from './queRoutine/cronfig';
import { pauseQueRoutine, startQueRoutine, stopQueRoutine } from './queRoutine';


export const AllSlashCommands = [status, que, clearLast, clearPost, setCronfig, currentCronfig, pauseQueRoutine, startQueRoutine, stopQueRoutine];
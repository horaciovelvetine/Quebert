import { AsyncTask } from "toad-scheduler";
import { getQueRoutine } from "../../api";
import { devConsoleMessage } from "../../messages";

const TASK_ID = 'QueRoutine';

export const createQueRoutineTask = async () => {
  return new AsyncTask(
    TASK_ID,
    async () => {
      let payload = getQueRoutine()
    },
    (error) => {
      devConsoleMessage(error.message)
    }
  )
}
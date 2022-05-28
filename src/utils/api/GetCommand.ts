import axios from "axios"
import { requestUrl } from "./requestUrlFormatter"

type GetCommandProps = {
  name: string
  payload: string
}

export const GetCommand = async (command: GetCommandProps): Promise<any> => {
  try {
    return await axios.get(requestUrl(`/command/${command.name}/${command.payload}`))
      .then(res => { return res })
      .catch(err => { return err })
  } catch (err) {
    return err
  }
}
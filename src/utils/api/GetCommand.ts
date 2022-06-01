import axios from 'axios';
import { requestUrl } from './requestUrlFormatter';

import type { GetCommandResponseData } from '../../interfaces/_index';

type GetCommandProps = {
	name: string;
	payload: string;
};

export const GetCommand = async (command: GetCommandProps): Promise<GetCommandResponseData> => {
	try {
		return await axios
			.get(requestUrl(`/command/${command.name}`))
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});
	} catch (err) {
		return err;
	}
};

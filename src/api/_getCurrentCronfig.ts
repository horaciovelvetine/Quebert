import axios from 'axios';

import { baseUrlFormatter } from '.';

export const getCurrentCronfig = async () => {
	try {
		return await axios
			.get(baseUrlFormatter(`/slash-command`))
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	} catch (error) {
		return error;
	}
};

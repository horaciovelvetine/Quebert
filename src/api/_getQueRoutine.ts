import axios from 'axios';
import { baseUrlFormatter } from '.';
import type { POST } from '../interfaces';

interface QUE_ROUTINE_RESPONSE {
	message: string;
	payload: {
		posts: POST[];
	};
}

export const getQueRoutine = async (): Promise<QUE_ROUTINE_RESPONSE> => {
	try {
		return await axios
			.get(baseUrlFormatter(`/post-routine`))
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

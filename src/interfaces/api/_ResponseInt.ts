import type { PostInt } from '../_post';

export interface APIResponseInt {
	message: string;
	payload: {
		posts?: PostInt[];
		time_of_last?: string;
		time_to_next?: string;
		total_queued?: string;
	};
}

import type { PostInt } from '../../interfaces';

export interface QueRoutineResInt {
	message: string;
	payload: {
		posts: PostInt[];
	};
}

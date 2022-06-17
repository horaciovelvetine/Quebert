//? DIFF PAYLOAD RESPONSE TYPE-ING
interface statusPld {
	total_posts: number;
	time_to_next: string;
	time_until_empty: string;
}

interface addQuePld {
	target: string; //channel name !== ID e.x. '#moderator-only'
	post_id: string;
	body: string;
}

interface queRoutinePld {
	posts: [];
}

type ResPayloads = statusPld | addQuePld | queRoutinePld;

export interface APIResponseInt {
	message: string;
	queue_length: number;
	payload: ResPayloads;
}

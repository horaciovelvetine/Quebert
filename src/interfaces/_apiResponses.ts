//? DIFF PAYLOAD RESPONSE TYPE-ING
interface ResponsePayloadsInt {
	time_of_last?: string;
	time_to_next?: string;
	total_queued?: string;
	id?: string;
	target?: string;
	body?: string;
	//bad news bearsville
	posts?: PostInt[];
}

interface PostInt {
	target: string;
	body: string;
	id: string;
}
export interface APIResponseInt {
	message: string;
	queue_length: string;
	payload: ResponsePayloadsInt;
}

//? DIFF PAYLOAD RESPONSE TYPE-ING
interface ResponsePayloadsInt {
	total_posts?: string,
	time_of_last?: string,
	time_to_next?: string,
	time_to_none?: string,
	id?: string,
	target?: string,
	body?: string,
	//bad news bearsville
	posts?: any
}

export interface APIResponseInt {
	message: string;
	queue_length: string;
	payload: ResponsePayloadsInt;
}

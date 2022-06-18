//? DIFF PAYLOAD RESPONSE TYPE-ING
interface ResponsePayloadsInt {
	total_posts?: string,
	time_to_next_post?: string,
	time_to_empty?: string
	posts?: []
}

export interface APIResponseInt {
	message: string;
	queue_length: string;
	payload: ResponsePayloadsInt;
}

import { devConsoleMessage } from '../messages';

export function handleAPIError(error: any) {
	//parses all possible errrors in Axios request cycle and returns more specific error message details
	switch (true) {
		// per axios error handling: https://axios-http.com/docs/handling_errors
		case error.response:
			// request recieved a responses outside of 2xx range
			devConsoleMessage(error.response);
			return error.response;

		case error.request:
			// request was made but no response was received
			devConsoleMessage(error.request);
			return error.request;

		default:
			// something happened in setting up the request that triggered an Error
			devConsoleMessage(error.message);
			return error.message;
	}
}

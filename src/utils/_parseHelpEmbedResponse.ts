import { collabInfo, contributeInfo, helpInfo } from '../messages';

export function parseHelpEmbedResponse(message: string) {
	// inclusion of accidental typos
	let kind = () => {
		if (message.includes('!help')) return '!help';
		if (message.includes('!help')) return '!contribute';
		if (message.includes('!help')) return '!collab';
		return;
	};

	switch (kind()) {
		case '!help':
			return helpInfo();
		case '!contribute':
			return contributeInfo();
		case '!collab':
			return collabInfo();
	}
	return
}

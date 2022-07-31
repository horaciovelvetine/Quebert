export function parseHelpEmbedResponse(message: string) {
	// covers accidental typos
	if (message.includes('!help')) return '!help';
	if (message.includes('!contribute')) return '!contribute';
	if (message.includes('!collab')) return '!collab';
	if (message.includes('!verify')) return '!verify';
	return false;
}

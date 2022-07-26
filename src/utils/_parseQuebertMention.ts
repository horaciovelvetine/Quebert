const {
	MessageMentions: { USERS_PATTERN },
} = require('discord.js');

export function parseQuebertMention(message: string) {
	const match = message.matchAll(USERS_PATTERN).next().value;
	if (!match) return null;
	const [, id] = match;
	return id;
}

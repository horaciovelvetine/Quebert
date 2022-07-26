export function pingMods(message: string) {
	return message.includes('!spam') ? 'Notifying the mod team! <@934481537263624242>' : 'false';
}

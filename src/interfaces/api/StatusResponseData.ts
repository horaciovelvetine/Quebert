export interface GuildStatus {
	id: number;
	name: string;
	total_posts: number;
}

export interface StatusResponseData {
	total_posts: number;
	guilds: GuildStatus[];
}

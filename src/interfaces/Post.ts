import type { GuildBasedChannel } from "discord.js"
import type { APIInteractionDataResolvedChannel } from "discord-api-types/v10"

export interface Post {
  id: string
  url: string
  target: APIInteractionDataResolvedChannel | GuildBasedChannel
}

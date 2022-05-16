import type { Guild } from 'discord.js'

export interface Post {
  id: string
  link: string
  target: Guild //=> should be guild!!
}
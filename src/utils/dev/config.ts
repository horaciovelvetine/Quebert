import 'dotenv/config'
import type { ClientOptions } from 'discord.js'

export default {
  token: process.env.DISCORD_TOKEN,
  client: process.env.CLIENT_ID,
  guild: process.env.GUILD_ID,
  baseUrl: process.env.BASE_URL
}

export const clientDetails = (): ClientOptions => {
  return ({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    presence: {
      status: 'online',
      activities: [{
        name: `@me for info!`,
        type: 'LISTENING'
      }]
    },
  }
  )
}


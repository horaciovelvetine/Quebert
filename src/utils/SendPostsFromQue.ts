import type { SendPostsFromQuePayload } from "../interfaces"

export async function SendPostsFromQue({ PostQue, client }: SendPostsFromQuePayload) {
  let modOnly = client.channels.cache.find(c => c.name === 'moderator-only')
  modOnly!.send({content: 'try this test message on for size'})
}
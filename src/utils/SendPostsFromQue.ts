import type { SendPostsFromQuePayload } from "../interfaces"
import type { Post } from "../interfaces"

export async function SendPostsFromQue({ PostQue, client }: SendPostsFromQuePayload) {
  let modOnly = client.channels.cache.find(c => c.name === 'moderator-only')
  
  let postsToSend: Post[] = []
  let numPosted = 0

  if (PostQue.postsInQue.length === 0) return modOnly!.send({ content: 'The Que is currently empty use the `/que` command to give me something to post!!'})

  const addBackToPostsInQue = PostQue.postsInQue.map(post => {
    const channelAlreadyInQue = postsToSend.filter(p => p.target === post.target).length !== 0 ? true : false

    // return post back to new Que[] if post is already being sent to that channel
    if (channelAlreadyInQue) return post
    numPosted ++
    postsToSend.push(post)
    return
  })

  PostQue.postsInQue = addBackToPostsInQue.filter(post => post !== undefined )

  postsToSend.forEach(post => {
    post.target.send(post.url)
  })

  modOnly!.send({content: `Just finished posting ${numPosted} posts! ${PostQue.postsInQue.length} post remains in the Que`})
}
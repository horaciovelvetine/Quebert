import type { PostQue } from "./PostQue"

export interface SendPostsFromQuePayload {
  PostQue: PostQue
  Channels: any
}
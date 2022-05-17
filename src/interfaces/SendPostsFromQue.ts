import type { Client } from "discord.js"
import type { PostQue } from "./PostQue"


export interface SendPostsFromQuePayload {
  PostQue: PostQue
  client: Client
}
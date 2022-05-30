export interface QueResponseData {
  message: string;
  newPostInfo:QuePostInfo
}

interface QuePostInfo {
  id: string
  body: string
  target: string
}
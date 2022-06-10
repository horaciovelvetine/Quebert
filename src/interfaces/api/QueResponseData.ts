export interface QueResponseData {
  message: string;
  newPostInfo:QuePostInfo
}
export interface QueRoutineResponseData {
  message: string
  que: QuePostInfo[]
}
export interface QuePostInfo {
  id: string
  body: string
  target: string
}
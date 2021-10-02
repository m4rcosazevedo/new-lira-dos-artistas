import { LoadYoutubeSearch } from '..'

export interface LoadYoutubeVideos {
  mapper: (data: LoadYoutubeSearch.Model) => LoadYoutubeVideos.Response
}

export namespace LoadYoutubeVideos {
  export type Response = LoadYoutubeSearch.Model
}

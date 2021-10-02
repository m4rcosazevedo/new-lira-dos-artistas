import { YoutubeSearchModel } from '@domain/models/youtube-model'

export interface LoadYoutubeSearch {
  load: () => Promise<LoadYoutubeSearch.Model>
}

export namespace LoadYoutubeSearch {
  export type Model = YoutubeSearchModel
}

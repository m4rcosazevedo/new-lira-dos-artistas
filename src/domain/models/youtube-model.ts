type YoutubeImageModel = {
  url: string
  width: number
  height: number
}

export type YoutubeSearchModel = {
  kind: string
  etag: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  },
  items: {
    kind: string
    etag: string
    id: {
      kind: string
      videoId: string
    },
    snippet: {
      publishedAt: string
      channelId: string
      title: string
      description: string
      thumbnails: {
        default: YoutubeImageModel
        medium: YoutubeImageModel
        high: YoutubeImageModel
      }
    },
    channelTitle: string
    liveBroadcastContent: string
    publishTime: Date
  }[]
}

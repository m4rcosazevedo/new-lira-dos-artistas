import { RemoteLoadYoutubeSearch } from '@data/usecases'
import { config } from '@main/config/credentials'
import { makeAxiosHttpClient } from '@main/factories/http'
import { makeYoutubeApiUrl } from '@main/factories/http/api-youtube-url-factory'

export const makeLoadYoutubeSearchFactory = (): RemoteLoadYoutubeSearch =>
  new RemoteLoadYoutubeSearch(
    makeYoutubeApiUrl(`key=${config.google.apiKey}&channelId=${config.google.youtubeChannelId}`),
    makeAxiosHttpClient()
  )

import { MapperLoadYoutubeVideos } from '@data/usecases/youtube/mapper-load-youtube-videos'

export const makeMapperLoadYoutubeVideos = (): MapperLoadYoutubeVideos =>
  new MapperLoadYoutubeVideos()

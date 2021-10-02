import { LoadYoutubeSearch, LoadYoutubeVideos } from '@domain/usecases'

export class MapperLoadYoutubeVideos implements LoadYoutubeVideos {
  mapper (data: LoadYoutubeSearch.Model) {
    return {
      ...data,
      items: data.items.filter(item => item.id.kind === 'youtube#video')
    }
  }
}

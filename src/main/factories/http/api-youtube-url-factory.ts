export const makeYoutubeApiUrl = (path: string): string => {
  const youtube_url = 'https://www.googleapis.com/youtube/v3/search'
  const params = '&part=snippet,id&order=date&maxResults=20'

  return `${youtube_url}?${path}&${params}`
}

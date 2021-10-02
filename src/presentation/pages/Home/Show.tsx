import React from 'react'
import { Container, Navbar } from '@presentation/components/UI'
import { About, Contact, Hero, Songs, Videos } from '@presentation/components/Home'
import { LoadYoutubeSearch, LoadYoutubeVideos } from '@domain/usecases'

type Props = {
  loadYoutubeSearch: LoadYoutubeSearch
  loadYoutubeVideos: LoadYoutubeVideos
}

type StateProps = {
  videos: LoadYoutubeVideos.Response
}

export const HomeShow: React.FC<Props> = ({ loadYoutubeSearch, loadYoutubeVideos }: Props) => {
  const [state, setState] = React.useState<StateProps>()

  React.useEffect(() => {
    (async () => {
      const responseYoutubeSearch = await loadYoutubeSearch.load()

      setState({
        videos: loadYoutubeVideos.mapper(responseYoutubeSearch)!
      })
    })()
  }, [])

  return (
    <Container>
      <Navbar />

      <Hero />
      <About />
      <Videos items={state && state.videos ? state.videos.items.slice(0, 4) : []} />
      <Songs />
      <Contact />
    </Container>
  )
}

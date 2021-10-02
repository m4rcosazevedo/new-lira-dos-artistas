import React from 'react'
import { HomeShow } from '@presentation/pages/Home/Show'
import { makeLoadYoutubeSearchFactory, makeMapperLoadYoutubeVideos } from '@main/factories/usecases'

export const MakeHomeShow: React.FC = () => <HomeShow
  loadYoutubeSearch={makeLoadYoutubeSearchFactory()}
  loadYoutubeVideos={makeMapperLoadYoutubeVideos()}
/>

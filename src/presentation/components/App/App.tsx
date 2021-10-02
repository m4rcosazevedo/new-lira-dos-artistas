import React from 'react'
import '@presentation/assets/scss/_global.scss'
import { MakeHomeShow } from '@main/factories/pages/home/show'

export function App (): JSX.Element {
  return (
    <>
      <MakeHomeShow />
    </>
  )
}

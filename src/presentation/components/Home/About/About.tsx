import React from 'react'
import './About.scss'

const about = {
  description: 'Situada na cidade de Rio de Contas, interior da Bahia, a Filarmônica Sociedade Musical e Beneficente "Lira dos Artistas", teve seu início em 1923 e desde então está presente entre a comunidade riocontense.'
}

export function About () {
  return (
    <section id="about">
      <div>
        <h3>{about.description}</h3>
      </div>
    </section>
  )
}

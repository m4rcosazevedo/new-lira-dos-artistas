import React from 'react'
import './Videos.scss'

type Props = {
  items?: {
    id: {
      videoId: string
    }
    snippet: {
      title: string
      publishedAt: string
      thumbnails: {
        high: {
          url: string
        }
      }
    }
  }[]
}

export const Videos: React.FC<Props> = ({ items }: Props) => {
  return (
    <section id="videos">
      <div className="meta-info">
        <div className="col-left">
          {items && items.map(item => (
            <div key={item.id.videoId} className="col">
              <div className="item">
                <a
                  href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                  <div className="hover">
                    <h3>{item.snippet.title}</h3>
                    <button>Acessar</button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="col-right">
          <h2>Youtube</h2>
          <p>Conheça nosso canal e veja nossos vídeos</p>
          <p>
            <a
              href="https://www.youtube.com/channel/UCN-zx-EiAIDfpmZrDMcNJnw"
              target="_blank"
              rel="noreferrer noopener"
            >Ir para o canal</a>
          </p>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import './Songs.scss'

const songs = [
  {
    title: 'Faixa 01 - Dobrado - Guilherme Teixeira',
    link: 'https://drive.google.com/file/d/1bSZyqaFm5ouWy_frw87TYP1PhsXmAQK3/view?usp=sharing'
  },
  {
    title: 'Faixa 02 - Dobrado - Luiz Pinto',
    link: 'https://drive.google.com/file/d/1w11NY791LTbEZnWuXNVq73HWLxyfLxGa/view?usp=sharing'
  },
  {
    title: 'Faixa 03 - Polaca - Maria Conceição',
    link: 'https://drive.google.com/file/d/15D30E5IUvmRB1IGHPaXdntVSsMcDVbcZ/view?usp=sharing'
  },
  {
    title: 'Faixa 04 - Dobrado - Depois do Acampamento',
    link: 'https://drive.google.com/file/d/118ocgvz_hL7HZ9PcDOOn0qddloRJ5ZnO/view?usp=sharing'
  },
  {
    title: 'Faixa 05 - Bolero - Sonhos de Primavera',
    link: 'https://drive.google.com/file/d/12ih6eLx2extm1ofVsad7zniDtKQlL3uc/view?usp=sharing'
  },
  {
    title: 'Faixa 06 - Dobrado - Recordação de um colega',
    link: 'https://drive.google.com/file/d/1OJ2m385pfXCVEJ48gDS5BRdJxhiUxG9p/view?usp=sharing'
  }
]

export function Songs () {
  return (
    <section id="songs">
      <div className="meta-info">
        <h2>Músicas</h2>
        <ul>
          {songs.map((song, index) => (
            <li key={`song-${index}`}>
              <a href={song.link} target="_blank" rel="noopener noreferrer">
                {song.title}
              </a>
            </li>
          ))}
        </ul>

        <a className="button" href="https://drive.google.com/drive/folders/1EkWImEv4PzekST4KGXhhXg_vzsUiBZT4?usp=sharing" target="_blank" rel="noopener noreferrer">
          Download Álbum Completo
        </a>

      </div>
    </section>
  )
}

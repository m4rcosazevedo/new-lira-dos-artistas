import React from 'react'
import Logo from '@presentation/assets/images/logo.png'
import './Hero.scss'

export function Hero () {
  return (
    <section id="home">
      <div className="meta-info">
        <img src={Logo} alt="Logotipo da Filarmônica, na image tem um desenho de uma Lyra, instrumento musical de quatro cortas da família das harpas" />
        <h1>Filarmônica Lira dos Artistas</h1>
        <h2>Rio de Contas - BA</h2>
      </div>

      <div id="line1" className="line line1"></div>
      <div id="line2" className="line line2"></div>
      <div id="line3" className="line line3"></div>
      <div id="line4" className="line line4"></div>
      <div id="line5" className="line line5"></div>
      <div id="line6" className="line line6"></div>
      <div id="line7" className="line line7"></div>
      <div id="line8" className="line line1"></div>
      <div id="line9" className="line line2"></div>
      <div id="line10" className="line line3"></div>
      <div id="line11" className="line line4"></div>
      <div id="line12" className="line line5"></div>
      <div id="line13" className="line line6"></div>
      <div id="line14" className="line line7"></div>
      <div id="line15" className="line line2"></div>
      <div id="line16" className="line line3"></div>
      <div id="line17" className="line line4"></div>
      <div id="line18" className="line line7"></div>
    </section>
  )
}

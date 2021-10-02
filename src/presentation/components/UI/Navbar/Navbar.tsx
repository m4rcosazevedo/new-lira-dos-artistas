import React from 'react'
import './Navbar.scss'
import T from '@presentation/components/Translator/Translator'
import { Link } from 'react-scroll'

type AProps = {
  to: string,
  children: React.ReactNode
}

const A: React.FC<AProps> = ({ to, children }: AProps) => {
  return (
    <Link to={to} activeClass="active" spy={true} smooth={true} offset={0} duration={700}>
      {children}
    </Link>
  )
}

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <A to="home">
            <T path="navbar.home" />
          </A>
        </li>
        <li>
          <A to="about">
            <T path="navbar.about" />
          </A>
        </li>
        <li>
          <A to="videos">
            <T path="navbar.videos" />
          </A>
        </li>
        <li>
          <A to="songs">
            <T path="navbar.songs" />
          </A>
        </li>
        <li>
          <A to="contact">
            <T path="navbar.contact" />
          </A>
        </li>
      </ul>
    </div>
  )
}

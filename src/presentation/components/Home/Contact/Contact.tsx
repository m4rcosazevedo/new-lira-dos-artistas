import React from 'react'
import './Contact.scss'
import * as fa from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socials = [
  {
    href: 'https://www.youtube.com/channel/UCN-zx-EiAIDfpmZrDMcNJnw',
    icon: fa.faYoutube
  },
  {
    href: 'https://wa.me/5577981463207',
    icon: fa.faWhatsapp
  },
  {
    href: 'https://www.instagram.com/liradosartistas/',
    icon: fa.faInstagram
  },
  {
    href: 'https://www.facebook.com/liradosartistasderiodecontas',
    icon: fa.faFacebookF
  }
]

export function Contact () {
  return (
    <section id="contact">
      <div className="meta-info">
        <ul>
          {socials.map(({ href, icon }, index) => (
            <li key={`social-${index}`}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} />
            </a>
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

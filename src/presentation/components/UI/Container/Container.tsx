import React from 'react'
import './Container.scss'

export const Container: React.FC = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

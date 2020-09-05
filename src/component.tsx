import React from 'react'

export const Component: React.FC = ({ children }) => {
  return (
    <div>
      <p>Component is rendered</p>
      <p>{children}</p>
    </div>
  )
}

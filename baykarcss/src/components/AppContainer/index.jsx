import React from 'react'

const AppContainer = ({children, className}) => {
  return (
    <div className={`container mx-auto px-4 md:px-0 ${className}`}>{children}</div>
  )
}

export default AppContainer
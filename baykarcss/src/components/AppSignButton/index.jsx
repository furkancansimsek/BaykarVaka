import React from 'react'

const AppSignButton = ({children, href='#', className, primary=true, size='md'}) => {
  let sizeClass;
  switch (size) {
    case 'sm':
      sizeClass = 'px-7 py-3';
      break;
    case 'md':
      sizeClass = 'px-8 py-4 text-xl';
      break;
    case 'lg':
      sizeClass = 'px-12 py-5 text-2xl';
      break;
  }

  return (
    <a href={href} className={`${sizeClass} font-medium ${primary ? 'text-primary border-primary' : 'text-[#ffffff] border-[#ffffff]'} rounded-lg border-2 ${className}`}>{children}</a>
  )
}

export default AppSignButton
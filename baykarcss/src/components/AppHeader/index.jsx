import React from 'react'
import AppContainer from '../AppContainer'
import AppSignButton from '../AppSignButton'

const AppHeader = () => {
  return (
    <>
        <AppContainer>
            <div className="flex justify-between items-center h-[67px] md:h-[96px] text-primary">
                <a href='#' className="flex items-center text-[32px] font-bold">Collers</a>
                <ul className="hidden md:flex items-center gap-8 font-medium">
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Solutions</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Resources</a></li>
                    <li><a href='#'>Log In</a></li>
                    <li><AppSignButton size='sm'>Sign up now</AppSignButton></li>
                </ul>
                <img className='block md:hidden' src="/assets/icons/menu.svg" alt="MENUBAR" />
            </div>
        </AppContainer>
    </>
  )
}

export default AppHeader
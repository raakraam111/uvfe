import React from 'react'
import Image from 'next/image';
import { Span } from 'next/dist/trace';
import LogoWord from './LogoWord';
function Header() {
  return (
    <div className='header-section'>

        <Image  src="/assets/nlogo2.png" // 
                alt="Logo" 
                width="200" 
                height="200"
                priority={true} 
                className='header-logo'
        />
         
         {/* <LogoWord firstWord="UPSIDE" secondWord="VAULT" /> */}
    </div>
  )
}

export default Header
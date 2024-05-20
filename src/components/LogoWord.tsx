import React from 'react'

function LogoWord({firstWord, secondWord}) {
  return (
    // <div className=' text-xl fw700 c-p df ac jc' >{ firstWord} <span className='c-s ml5'>{ secondWord}</span></div>
    
    <div className='ffp text-2xl ml--40 fw700 c-p' >
          {firstWord} <span className='c-s'>{secondWord}</span>
    </div> 
  )
}

export default LogoWord
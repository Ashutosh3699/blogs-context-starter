import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const HeaderText = () => {

  const {isDark} = useContext(AppContext);

  return (
      <div>

      {
        isDark ? 
        (
          <div className=' bg-gray-700 text-center py-3 w-full shadow-[0_5px_10px_rgba(255,255,255,0.5)] fixed top-0  select-none'>
              <header>
                  <h1 className='text-3xl font-extrabold text-gray-300 uppercase'>Software Blog Context</h1>
              </header>
          </div>
        ) : 
        (
          <div className=' bg-gray-200 text-center py-3 w-full shadow-[0_5px_10px_rgba(0,0,0,0.5)] fixed top-0 select-none'>
                <header>
                    <h1 className='text-3xl font-extrabold text-gray-500 uppercase'>Software Blog Context</h1>
                </header>
            </div>
        )
      }



    </div>
  )
}

export default HeaderText
import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Spinner = () => {

    const {isDark} = useContext(AppContext);

  return (
    <div className='w-full h-screen flex justify-center items-start' >

      {
        isDark? (<div className="spinner"></div>) : 
        (<div className="spinner2"></div>)
      }
      
    </div>
  )
}

export default Spinner
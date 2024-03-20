import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Pagination = () => {

    const {page,totalPage,handleChange,isDark,bgChange} = useContext(AppContext);

  return (
    <div>
          {
            isDark ? 
            (
              <div className='flex w-full  justify-around fixed border-2 border-gray-900  px-40
     bottom-0 bg-slate-700 py-2 shadow-[5px_0_10px_rgba(190,190,200,0.4)]  items-center text-white' >

    <div className='flex gap-x-3'>

        {page>1 &&
        (
            <button
            className='border-2 rounded-md py-1 px-3 '
            onClick={()=>handleChange(page-1)}
            >Previous</button>
        )
          
        }

        {page<totalPage &&
         (
            <button
             className='border-2 rounded-md py-1 px-3'
                onClick={()=>handleChange(page+1)}
            >Next</button>
         )
           
        }


    </div>

    <p className='font-semibold'>Page <span>{page}</span> of  <span>{totalPage}</span></p>


    <button onClick={bgChange}>
        {
          isDark ?
           (<span className='text-white cursor-pointer'><CiLight fontSize={32} /></span>) :
           (<span className='text-black cursor-pointer'><CiDark fontSize={32} /></span>)
        }

    </button>


              </div>
              
            ): 
            (
              <div className='flex w-full  justify-around fixed border-2 border-gray-400  px-40
                bottom-0 bg-white py-2 shadow-[5px_0_10px_rgba(0,0,0,0.2)]  items-center ' >

                <div className='flex gap-x-3'>

                    {page>1 &&
                    (
                        <button
                        className='border-2 rounded-md py-1 px-3'
                        onClick={()=>handleChange(page-1)}
                        >Previous</button>
                    )
                      
                    }

                    {page<totalPage &&
                    (
                        <button
                        className='border-2 rounded-md py-1 px-3'
                            onClick={()=>handleChange(page+1)}
                        >Next</button>
                    )
                      
                    }


                </div>

                <p className='font-semibold'>Page <span>{page}</span> of  <span>{totalPage}</span></p>


                <button onClick={bgChange}>
                    {
                      isDark ?
                       (<span className='text-white cursor-pointer'><CiLight fontSize={32}/></span>) :
                       (<span className='text-black  cursor-pointer'><CiDark fontSize={32}/></span>)
                    }

                </button>


              </div>
            )
          }
  </div>
    
  )
}

export default Pagination
import React, { useContext } from 'react'
import HeaderText from '../components/HeaderText';
import {useNavigate} from 'react-router-dom';
import BlogContent from '../components/BlogContent';
import Pagination from '../components/Pagination';
import {useLocation} from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const TagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {isDark} = useContext(AppContext);

  let tag = location.pathname.split("/").at(-1).replace("-"," ");
  return (
    <div className='h-full'>
    
      <HeaderText/>

      {
        isDark ? 
        (
          <div className='w-full bg-slate-700 pt-32 pb-32 text-white h-full'>

            <div className='flex  gap-x-4 w-3/6 mx-auto mb-8  items-center'>
                <button
                className='py-1 px-4 border-white border-2 rounded-md'
                onClick={()=>(navigate(-1))}
                >Back</button>

                <p>Blogs Tagged by </p>
                <span>{tag}</span>
              </div>
              
          <BlogContent/>
          
        </div>
        ) : (
          <div className='w-full bg-white pt-32 pb-32  '>

            <div  className='flex  gap-x-4 w-3/6 mx-auto mb-8 items-center '>
                <button
                className='py-1 px-4 border-black border-2 rounded-md'
                onClick={()=>(navigate(-1))}
                >Back</button>

                <p>Blogs Tagged by </p>
                <span>{tag}</span>
              </div>
              
          <BlogContent/>
          
        </div>
        )
      }

        

        <Pagination/>

    </div>
  )
}

export default TagPage
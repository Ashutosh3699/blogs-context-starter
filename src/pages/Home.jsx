import React from 'react';
import HeaderText from '../components/HeaderText';
import BlogContent from '../components/BlogContent';
import Pagination from '../components/Pagination';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';


const Home = () => {

  const {isDark} = useContext(AppContext);
  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-auto'>
      <HeaderText/>

      {
        isDark ? (<div className='w-full bg-slate-700 pt-32 pb-32 '>
          <BlogContent/>
        </div>) : (
          <div className='w-full bg-white  pt-32 pb-32'>
          <BlogContent/>
          </div>
        )
      }

      
      <Pagination/>
    
    </div>
  )
}

export default Home
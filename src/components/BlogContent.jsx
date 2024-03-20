import React, { useContext } from 'react'
import  { AppContext } from '../Context/AppContext';
import CardContent from './CardContent';
import Spinner from './Spinner';

const BlogContent = () => {

    const {post,isLoading} = useContext(AppContext);

  return (
    <div className='w-10/12 max-w-[700px] flex flex-col gap-y-8 mx-auto  '>

        {
            isLoading ? 
            (<Spinner/>) : 
            (
                post.length === 0 ?
                 (<div className='font-extrabold text-4xl text-gray-500 w-full h-screen flex justify-center items-center '>No Data Available....</div>) :
                  (
                    post.map((data)=>( <CardContent key={data.id} data= {data}/> ))
                 )
            )
        }

    </div>
  )
}

export default BlogContent
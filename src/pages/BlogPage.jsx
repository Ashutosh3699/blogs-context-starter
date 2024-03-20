import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import HeaderText from '../components/HeaderText';
import CardContent from '../components/CardContent';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const BlogPage = () => {

  const {isLoading, setLoading,isDark,bgChange} = useContext(AppContext);
  const [blogs, setBlogs] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const blogId =  location.pathname.split("/").at(-1).replaceAll("-"," ");

  async function fetchBlogData(){

    setLoading(true);
    const url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
    console.log(url);

    try {
      
      const response = await fetch(url);
      const output = await response.json();
      setBlogs(output.blog);
      setRelatedBlogs(output.relatedBlogs);

    } catch (error) {
      console.log("error occurred");
      setBlogs(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  console.log(blogs);

  useEffect(()=>{

    if(blogId ){
      fetchBlogData();
    }
  },[location.pathname]);



  return (
    <div className='h-full'>
      <HeaderText/>

    {
      isLoading ?
       (<Spinner/>) :
       (
        
          isDark ? 
          (
            <div className='w-full bg-slate-700 pt-32 pb-32 text-white '>

              <div className='w-1/2 mx-auto flex  gap-x-4 items-center mb-5'>
                <button
                className='py-1 px-4 border-white border-2 rounded-md'
                onClick={()=>(navigate(-1))}
                >Back</button>

                <button onClick={bgChange}>
                        {
                          isDark ?
                          (<span className='text-white cursor-pointer'><CiLight fontSize={32} /></span>) :
                          (<span className='text-black cursor-pointer'><CiDark fontSize={32} /></span>)
                        }

                    </button>

              </div>
              <div className='w-1/2 mx-auto '>
              {
                blogs ? (<div>
                  <CardContent  data={blogs}  />

                  <div>Related blogs</div>
                  {
                relatedBlogs.map((post, index)=>(

                  <CardContent data={post}  key={index}/>
                ))
              }
                </div>) : (<p>data not found</p>)
              }
              </div>

            </div>
          ) : 
          
          (
            <div className='w-full bg-white pt-32 pb-32 '>

              <div className='w-1/2 mx-auto flex  gap-x-4 items-center mb-5'>
                <button
                className='py-1 px-4 border-black border-2 rounded-md'
                onClick={()=>(navigate(-1))}
                >Back</button>

                <button onClick={bgChange}>
                        {
                          isDark ?
                          (<span className='text-white cursor-pointer'><CiLight fontSize={32} /></span>) :
                          (<span className='text-black cursor-pointer'><CiDark fontSize={32} /></span>)
                        }

                    </button>

              </div>
              <div className='w-1/2 mx-auto '>
              {
                blogs ? (<div>
                  <CardContent  data={blogs}  />

                  <div>Related blogs</div>
                  {
                relatedBlogs.map((post, index)=>(

                  <CardContent data={post}  key={index}/>
                ))
              }
                </div>) : (<p>data not found</p>)
              }
              </div>

            </div>
          )
        
       )
    }
    {/* <Pagination/> */}
    
    </div>
  )
}

export default BlogPage
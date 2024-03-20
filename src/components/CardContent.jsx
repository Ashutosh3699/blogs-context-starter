import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import {NavLink} from 'react-router-dom'

export const CardContent = ({data}) => {

    const {isDark} = useContext(AppContext);
    // console.log(data.id);
  return (
    <div>


    <header className='flex flex-col w-full'>

    {
        isDark ? ( 
            <NavLink to={`/blog/${data.id}`}>
        <h3 className='font-bold text-2xl hover:underline cursor-pointer text-white'>{data.title}</h3>
        </NavLink>
        ) : ( 
            <NavLink to={`/blog/${data.id}`}>
            <h3 className='font-bold text-2xl hover:underline cursor-pointer'>{data.title}</h3>
            </NavLink>
        )
    }
        

        {
            isDark ?
            (<div>
                <blockquote className='text-sm text-cyan-200 font-semibold'>By <span className='italic '>{data.author}  </span>  
                On <span className='font-bold  underline text-blue-400'>
                <NavLink to={`/categories/${data.category.replace(" ","-")}`}>
                {data.category}
                </NavLink>
                </span></blockquote>

                <p className='text-sm text-blue-300 font-semibold'>Posted on 
                <span className='font-bold   text-blue-500'>  {data.date}</span></p>
        </div>
            ) :
             (<div>
                <blockquote className='text-sm text-cyan-900 font-semibold'>By <span className='italic '>{data.author}  </span>  
                On <span className='font-bold  underline text-blue-800'>
                <NavLink to={`/categories/${data.category.replace(" ","-")}`}>
                {data.category}
                </NavLink>
                </span></blockquote>

                <p className='text-sm text-blue-900 font-semibold'>Posted on 
                <span className='font-bold   text-blue-950'>  {data.date}</span></p>
        </div>
            )
        }

      
    </header>

    {
        isDark ? (
            <section className='mt-3 font-sans text-md mb-3 text-white '>
            <p>{data.content}</p>
        </section>
        ) : (
            <section className='mt-3 font-sans text-md mb-3 '>
            <p>{data.content}</p>
        </section>
        )
    }

    

    <footer className='font-bold text-xs '>
        {
            data.tags.map((tag, index)=>{

                return <span key={index} className='mr-3 text-blue-600 underline cursor-pointer'>
                <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}>
                    #{tag}
                    </NavLink>
                </span>
            })
        }
    </footer>



</div>
  )
}

export default CardContent;

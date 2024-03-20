import React, {  createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';
import {useNavigate } from 'react-router-dom';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    
    const [isLoading, setLoading] = useState(false);
    const  [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [post,setPost] = useState([]);
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();



    const fetchInfo = async (page = 1, tag=null, category)=>{

        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag){

            url += `&tag=${tag}`;
        }
        if(category){

            url += `&category=${category}`;
        }
        // console.log(url);

        try {

        const  response = await fetch(url);
        const result = await response.json();
        setTotalPage(result.totalPages);
        setPost(result.posts);
        setPage(result.page);
      

        
        } catch (error) {
            
            console.log("error occured while the api called");
            setTotalPage(null);
            setPost([]);
            setPage(1);

        }

        setLoading(false);
    }

    function handleChange(page){

        navigate({search: `?page=${page}`});
// this is used from useLoaction  hook  where we have the current url and we update the value of page using curent url not from  another
        setPage(page);

    }

    function bgChange(){

        if(isDark===false){

            setIsDark(true);
        }
        else{
            setIsDark(false);
        }
    }

    const values={
        isLoading,
        setLoading,
        isDark,
        setIsDark,
        page,
        setPage,
        totalPage,
        setTotalPage,
        post,
        setPost,
        handleChange,
        bgChange,
        fetchInfo
    }


    return  <AppContext.Provider  value={values}>
    {children}
</AppContext.Provider>


}


export default AppContextProvider;

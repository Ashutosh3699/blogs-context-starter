import  "./App.css";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import TagPage from "./pages/TagPage";
import BlogPage from "./pages/BlogPage";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import {Routes,Route,useSearchParams, useLocation} from 'react-router-dom';
import { useEffect } from "react";

export default function App() {

  const {fetchInfo} = useContext(AppContext);
  const [searchParams  ] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{

    const page = searchParams.get("page")  ??  1;

    // console.log(page);

    if(location.pathname.includes("tag")){

      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchInfo(Number(page),tag);
    }
    else if(location.pathname.includes('categories')){

      const category =  location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchInfo(Number(page),null, category);
    }
    else{
      fetchInfo(Number(page));
    }
  },[location.pathname, location.search,fetchInfo,searchParams]);

  return (

    <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto">
    <Routes>

      <Route path={"/"}   element={<Home/>}/>
      <Route path={"/blog/:BlogId"}   element={<BlogPage/>}/>
      <Route path={"/tags/:TagId"}   element={<TagPage/>}/>
      <Route path={"/categories/:categoryId"}   element={<CategoryPage/>}/>
 
    </Routes>

  </div>
  );
}

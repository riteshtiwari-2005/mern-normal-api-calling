import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import categories from './data';

export default function App() {
  const[courses,setcourses]=useState({});
  const [category,setcategory]=useState(categories[0].title);
  const apiurl='https://codehelp-apis.vercel.app/api/get-top-courses';
  useEffect(()=>{
const fetchdata= async()=>{
  try{
let response=await fetch(apiurl);
let data=await response.json();
setcourses(data.data);
console.log(data)
  }
  catch{
    console.log("Something error");
  }
}
fetchdata()
  },[])
  return (
    <div className=''>
<Navbar/>
<div className=' bg-[#4A4E69] min-h-screen'>

<Filter filterData={categories}
category={category}
setcategory={setcategory}
/> 
<Cards courses={courses} category={category}/>
</div>
    </div>
  )
}

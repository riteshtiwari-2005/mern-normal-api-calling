import React from 'react';
import Card from './Card';

export default function Cards(props) {
let allcourses_1=props.courses;
let category=props.category;

const getAllCourses = () => {
  if(category ==='All')
  {
    return Object.values(allcourses_1).flat(); // Cleanest way
  }
  else{
    
    return allcourses_1[category] ;
    
  }
  };

  const allCourses = getAllCourses();

  return (
<div className='mx-auto max-w-[1080px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6'>
      {
      allCourses.map((course, index) => (
        <Card key={course.id || index} course={course} />
      ))
      
      }

    </div>
  );
}

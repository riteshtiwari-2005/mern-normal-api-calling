import React from 'react'

export default function Card(props) {
  return (
    <div className='w-10/11  bg-[#2A2B44] mb-8'>
      <img src={props.course.image.url} alt="" />
      <div className='p-4'>
<h2 className='text-white font-bold text-[25px] min-h-[10px]'>{props.course.title}</h2> 
<p className='text-white text-[15px]'>{props.course.description.length > 150 
          ? props.course.description.slice(0, 150) + '...'
          : props.course.description}</p>
      </div>

    </div>
  )
}

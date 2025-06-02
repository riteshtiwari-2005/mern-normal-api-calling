import React from 'react';

export default function Filter(props) {
  const { category, setcategory, filterData } = props;

  const filterdata = (title) => {
    setcategory(title);
  };

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-3 mx-auto py-3 justify-center'>  
      {
        filterData.map((item, index) => (
          <button
            key={index}
            className={`p-2 bg-[#2C2F3F] text-white text-[20px] hover:cursor-pointer 
              ${category === item.title ? 'border-2 border-grey-400' : ''}`}
            onClick={() => filterdata(item.title)}
          >
            {item.title}
          </button>
        ))
      }
    </div>
  );
}

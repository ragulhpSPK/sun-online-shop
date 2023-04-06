import React from 'react'
import { BestDeals } from '@/helper/bestDeals'

function Allbestdeals() {
  return (
    <div className='flex items-center justify-center pt-10'>
        
        <div className='grid grid-cols-5 gap-6 '>
        { BestDeals.map(data=>{
        return(
          
            <div className='relative   w-[16vw] h-[40vh] border bg-[#fff] border-gray-200 m-auto shadow-lg'> 
            <img src={data.image} className='h-[220px] pt-10 pl-10'/>
            <p className='bg-[gold] w-14 h-10 absolute top-0 right-0  flex flex-col text-sm text-center'><span>{data.offer[0]}</span>{data.offer[1]}</p>
            <p className='text-center'>{data.name}</p>
            <p className='text-center'>Rs:{data.price}</p>
           </div>   
        )
    })}
     </div>
    </div>
  )
}

export default Allbestdeals
import React from 'react'
import { BestDeals } from '@/helper/bestDeals'
import Link from 'next/link'

function Bestdeals() {
   
  return (
    <div className=' bg-[red] h-[60vh] w-[90vw] m-auto flex'>
<div className='flex flex-col border-8 border-[blue] h-[59vh] w-[89.5vw] m-auto rounded-md'>
        <div className='flex justify-between px-1 bg-[blue]  h-[20vh]'>
        <div className='flex flex-col justify-around'><img src='/assets/deals.png' className='w-28 h-14'/>
            <p className='text-white text-2xl'>Best Deals today</p>
        </div>
        <div><h1 className='text-5xl text-white pt-2'>Limited Time Sales</h1></div>
        <div className='flex flex-col justify-around'><img src='/assets/deals2.png' className='w-16 h-14'/>
            <Link href="/Allbestdeals"><p className='text-white'>see more &#8594;</p></Link>
        </div>
        </div>
        <div className='flex'>
        { BestDeals.slice(0,5).map(data=>{
        return(
          
            <div className='relative   w-[18vw] h-[40vh] border-r-2 bg-[#fff] border-gray-400'> 
            <img src={data.image} className='h-[220px] pt-10 pl-10'/>
            <p className='bg-[gold] w-14 h-10 absolute top-0 right-0 skew-[20px] flex flex-col text-sm text-center'><span>{data.offer[0]}</span>{data.offer[1]}</p>
            <p className='text-center'>{data.name}</p>
            <p className='text-center'>Rs:{data.price}</p>
           </div>   
        )
    })}
     </div>
      
      
    </div>
    </div>
    
  )
}

export default Bestdeals
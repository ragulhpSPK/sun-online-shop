import { TopProducts } from '@/helper/topProducts'
import React from 'react'

function Topproducts() {
  return (
    <div className='w-[90vw] m-auto pt-10'>
        <div className='text-xl'>
            <h1 className='bg-[blue] py-3 px-2 text-white'>Top Products</h1>
        </div>
        <div className='grid grid-cols-5 gap-x-28 gap-y-2'>
            {TopProducts.map(data=>{
                return(
                  
                 <div className=' w-[12vw] border shadow-lg h-[25vh] relative mt-5'>
                    <div className='h-[18vh]'>
                    <img src={data.image} className='w-[20vw] h-[18vh]'/>
                        </div>
                  
                    <div className='h-[5vh] '>
                    <h1 className='text-center'>{data.name}</h1>
                    <p className='text-center'>Rs:{data.price}</p>
                    <div className='bg-[gold] w-10 h-8 absolute right-0 bottom-0'>
                    <img src='/assets/cart2.png' className='w-5 m-auto pt-1'/>
                        </div>     
                    </div>
                </div>
                )
            })}
      
        </div>
       
    </div>
  )
}

export default Topproducts
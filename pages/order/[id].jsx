import React from 'react'
import styles from "../../styles/Home.module.css";
import { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Order()
{

    const [out,setOut]=useState(false)
    const [way,setWay]=useState(false)
    const [received,setReceived]=useState(false)

	return (
		<div>
			<div className='w-[90vw] m-auto pt-10'>
				<div className="overflow-x-auto">
					<table className="table w-full border text-xl">
						{/* head */}
						<thead >
							<tr>
								<th className='text-[22px] font-medium'>Order ID</th>
								<th className='text-[22px] font-medium'>Customer</th>
								<th className='text-[22px] font-medium'>Address</th>
								<th className='text-[22px] font-medium'>Total</th>
							</tr>
						</thead>
						<tbody> {/* row 1 */}
							<tr>
								<td className='border-r'>786498778636</td>
								<td className='border-r'>Josh</td>
								<td className='border-r'>XYZ,abc,726397</td>
								<td className='border-r'>872</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

            <div className='text-4xl pt-16 m-auto w-[90vw] text-center'>
					<h1 className='text-slate-700'>Your Order Status</h1>
				</div>
			<div className='w-[70vw] m-auto pt-5 flex'>
                <div className='flex items-center justify-center'>
                <div className='py-5 px-3 border w-[16vw]'>
                    {out?(   <div>
                <div><img src='/assets/checked.png' className='w-10 m-auto'/></div>
               <p className='text-[18px]'>your product Shipped</p>
               </div>):( <div>
                    <div className={styles.spinner}></div>
                    <p className='text-2xl text-center'>Processing...</p>
                    </div>)}   
                </div>
                <span className='text-9xl font-medium'><ArrowRightAltIcon fontSize='300px'/></span>
                </div>
                <div className='py-5 px-3 border w-[16vw]'>
                    <div>
                    <img src='/assets/bike.png' className={` m-auto ${way?'animate-ping w-5' : 'animation-none w-10'} duration-2000`}/>
                    <p className='text-2xl mt-5 text-center'>On The Way</p>
                    </div>
                </div>
                <span className='text-9xl font-medium'><ArrowRightAltIcon fontSize='300px'/></span>
                <div className='py-5 px-3 border w-[16vw]'>
                    <div>
                    <img src='/assets/checked.png' className={` m-auto ${received?'animation-none w-10' : 'animate-ping w-5'} transition duration-2000`}/>
                    <p className='text-2xl mt-10 text-center'>Product Recieved</p>
                    </div>
                </div>
			</div>
		</div>
	)
}

export default Order

import React,{useState} from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Products from './products'
import Categories from './categories';

function DashBoard()
{
	const [product,setProduct]=useState(false)
	const [category,setCategory]=useState(false)

	const clickCategory=()=>{
		setProduct(false)
		setCategory(true)
	}
	const clickProduct=()=>{
		setCategory(false)
		setProduct(true)
		
	}
	return (
		<div className='flex'>
			<div className='w-[10vw] h-[95vh] border-r border-slate-100 shadow-2xl flex flex-col '>

				<div className='h-[85vh]  m-auto'>
					<div className='flex  m-auto pt-3 pl-2 bg-[#82237c] text-white h-12 w-32 rounded-md mt-2'>
						<DashboardCustomizeIcon/>
						DashBoard
					</div>
					<div className='flex   m-auto pt-3 pl-2 bg-[#82237c] text-white h-12 w-32 rounded-md mt-3' onClick={clickProduct}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 ">
							<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
						</svg>

						Products
					</div>
					<div className='flex  m-auto pt-3 bg-[#82237c] pl-2 text-white h-12 w-32 rounded-md mt-3' onClick={clickCategory}>
						<CategoryIcon/>
						Categories
					</div>
				</div>

			</div>

			<div>
				{product?<Products/>:""}
			</div>
			<div>
				{category?<Categories/>:""}
			</div>
		</div>

	)
}

export default DashBoard

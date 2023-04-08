import React,{useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../../styles/Home.module.css'
import CloseIcon from '@mui/icons-material/Close';

function Categories()
{
    const [category,setCategory]=useState(false)
    const [dlt, setDlt] = useState(false)
	return (
		<div className='pl-20 pt-10'>
			<div className="overflow-x-auto ">
				<table className="table  w-[70vw] ">
					{/* head */}
					<thead>
						<tr>
							<th className='text-xl font-medium'>Id</th>
							<th className='text-xl font-medium'>Category</th>
							<th className='text-xl font-medium'>SubCategory</th>
							<th className='text-xl font-medium'>actions</th>
						</tr>
					</thead>
					<tbody className='text-xl'>
						<tr>
							<td>2439874297394</td>
							<td>mobile</td>
							<td>Mi</td>
							<td className='flex justify-between items-center gap-5 h-32 w-32'>
                            <label htmlFor="my-modal-3" className="rounded-md h-10 w-12 bg-[#82237c] border-none text-center pt-1" ><EditIcon onClick={
											() => {
												setCategory(true)
											}
										}/></label>
								<a href="#my-modal-2" className=" rounded-md h-10 w-12 bg-[#82237c] border-none text-center pt-1" onClick={()=>{setDlt(true)}}><DeleteIcon/></a>	</td>

						</tr>

					</tbody>
				</table>
			</div>
            <div className='w-[80vw] flex justify-center h-[50vh]'>
                {category?( <div>
				<input type="checkbox" id="my-modal-3" className="modal-toggle"/>
				<div className="modal ">
					<form id={styles.form} className='h-[350px] w-[20vw] relative'>
						Sign Up
						<input type="text" class="input" placeholder="Category"/>
						<input type="text" class="input" placeholder="Sub Category"/>
						<button>Update</button>
            <CloseIcon className='text-black  absolute top-0 right-0 m-2 w-10' onClick={()=>setCategory(false)}/> 
					</form>
        
				</div>
       
			</div>):''}
           
            </div>


            {dlt?(<div className="modal" id="my-modal-2" >
  <div className="modal-box">
   <h3 className='text-2xl'>Are you sure want to delete this product</h3>
    <div className="modal-action">
     <a href="#" className="btn">Yay!</a>
     <a href="#" className="btn" onClick={()=>setDlt(false)}>no</a>
    </div>
  </div>
</div>):""}
			
		</div>
	)
}

export default Categories

import React from 'react'
import
{
	useState
} from 'react'

import styles from '../styles/form.module.css'


function Cart()
{
	const [check, setCheck] = useState(false)
	return (
		<div className='flex relative'>
			<div className='pt-10'>
				<div className="overflow-x-auto w-[70vw]">
					<table className={
						`table w-[60vw] border m-auto  
						}`
					}>
						{/* head */}
						<thead>
							<tr>

								<th>Product</th>
								<th>Name</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody> {/* row 1 */}
							<tr>
								<td className='border-r'><img src='/assets/blutooth_speaker.png' className='w-20'/></td>
								<td className='border-r'>Blutooth Speaker</td>
								<td className='border-r'><input type='number'
										min={1}
										max={5}
										defaultValue={1}
										className='w-10'/></td>
								<td className='border-r'>99</td>
								<td className='border-r'>198</td>
							</tr>
							<tr>
								<td className='border-r'><img src='/assets/blutooth_speaker.png' className='w-20'/></td>
								<td className='border-r'>Blutooth Speaker</td>
								<td className='border-r'><input type='number'
										min={1}
										max={5}
										defaultValue={1}
										className='w-10'/></td>
								<td className='border-r'>99</td>
								<td className='border-r'>198</td>
							</tr>
							{/* row 2 */} </tbody>
					</table>
				</div>
			</div>
			<div className={
				`mt-14 w-[20vw] h-[40vh] text-white ${
					check ? 'hidden' : 'block'
				}`
			}>
				<div className=' bg-black/90 h-[100%] text-xl pl-5 flex flex-col justify-evenly'>
					<p>Total Price:198</p>
					<p>Total Discount:0</p>
					<p>Total Quantity:2</p>

					<button className='bg-[gold] w-[12vw] h-[6vh] rounded-sm text-black font-medium'
						onClick={
							() => setCheck(true)
					}>Cash On Delivery</button>
				</div>
			</div>

			<div className={
				`min-h-[50vh] w-[30vw] absolute right-10 top-10 shadow-2xl pl-10 ${
					check ? 'block' : 'hidden'
				}`
			}>
				<section className={
					styles.section_form
				}>
					<form id={
							styles.consultation_form
						}
						className={
							styles.feed_form
						}
						action="#">
                            <h1 className='text-2xl py-3'>Enter Your Delivery Location</h1>
						<input required="" placeholder="Name" type="text"/>
						<input name="phone" required="" placeholder="Phone number 1"/>
						<input name="phone" required="" placeholder="Phone number 2"/>
						<textarea name="message" required="" placeholder="Address" type="email"
							rows={10}
							cols={7}/>
						<button className={
							styles.button_submit
						}>CheckOut</button>
					</form>
				</section>
			</div>
		</div>
	)
}

export default Cart

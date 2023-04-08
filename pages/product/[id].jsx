import {
	useState,
	useRef
} from 'react'
import React from 'react';

import styles from '../../styles/zoom.module.css'


export default function App() {
	const images = [
		'/assets/redmi1.jpg',

		'/assets/redmi2.jpg',
		'/assets/redmi3.jpg',
		'/assets/redmi4.jpg',
		'/assets/redmi5.jpg',
	]


	const [img, setImg] = useState(images[0])

	const hoverhandler = (image, i) => {
		setImg(image)
		refs.current[i].classList.add('active')
		for (var j = 0; j < images.length; j++) {
			if (i !== j) {
				refs.current[j].classList.remove('active')
			}
		}
	}

	const refs = useRef([])
	refs.current = []

	const addref = (el) => {
		if (el && ! refs.current.includes(el)) {
			refs.current.push(el)
		}
	}
	return (
		<div className="h-[100vh] flex justify-evenly">
			
				<div className={styles.container}>
					<div className={
						styles.left
					}>
            <div className={
						styles.left_2
					}>
						{/* <ReactImageMagnify {...{
								    smallImage:{
								        alt:'not',
								        isFluidWidth:true,
								        src:img,
								    },
								    largeImage:{
								        src:img,
								        width:1200,
								        height:1800,
                        
								    }    
								}}
							className={
								styles.img
							}/> */}
							<img src={img} alt="product"/>
					</div>
						<div className={
							styles.left_1
						}>
							{
							images.map((image, i) => {
								return (
									<div className={i===0? "border-4":"border-none"}
                  id={styles.img_wrap}
										key={i}
										onClick={
											() => hoverhandler(image, i)
										}
										ref={addref}>
										<img src={image}
											alt='not found'/>

									</div>
								)
							})
						} </div>

				
				</div>
			</div>
			<div className="pt-20 w-[50vw]">
				<h1 className="text-3xl font-semibold">
					REDMI Note 12 Pro 5G (Onyx Black, 128 GB) (6 GB RAM)
				</h1>
				<p className="text-2xl text-slate-800 pt-1">Rs:25999</p>
				<h2 className="text-2xl pt-5">Product Specifications</h2>
				<li className="text-2xl pt-1">8 GB RAM | 128 GB ROM</li>
				<li className="text-2xl pt-1">16.94 cm (6.67 inch) Full HD Display</li>
				<li className="text-2xl pt-1">
					50MP (OIS) + 8MP + 2MP | 16MP Front Camera
				</li>
				<li className="text-2xl pt-1">5000 mAh Lithium Polymer Battery</li>
				<li className="text-2xl pt-1">Mediatek Dimensity 1080 Processor</li>
				<div className="w-[100%] pt-5">
					<label for="quantity" className="p-5 font-light text-xl">
						Qty
					</label>
					<input type="number" min="1" max="5"
						defaultValue={1}
						defaultChecked
						id="quantity"
						name="quantity"
						className="w-12  border-2 border-black "/>
				</div>
				<div className="pt-10 flex justify-between w-[15vw]">
					<button className="bg-[#82237c] text-[#fff] text-2xl rounded-md px-3 py-2">
						Add to Cart
					</button>
					<button className="bg-[#82237c] text-[#fff] text-2xl rounded-md px-3 py-2">
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
}

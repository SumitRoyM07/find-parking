import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'


const AddSpot = () => {

  const [images, setImages]=useState({
    1: null,
  })
  const [inputs,setInputs]=useState({
    spotType: '',
    pricePerDay: 0,
    totalSpot: 0,
  })
  
  return (
    <form action="">
      <Title align='left' font='outfit' title='Add Spot' subTitle='Fill in the details carefully and accurate spot details, pricing and total spots to enhance the user booking experience.'/>
      {/* Upload Image Area */}
      <p className='text-gray-800 mt-10'>Image</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key)=>(
          <label htmlFor={`spotImage${key}`} key={key}>
            <img className='rounded h-25 w-auto cursor-pointer'
            src={images[key] ? URL.createObjectURL(images[key]):assets.uploadArea} alt="" />
            <input type="file" accept='image/*' id={`spotImage${key}`} hidden
            onChange={e=> setImages({...images, [key]: e.target.files[0]})} />
          </label>
        ))}
      </div>

      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 mt-4'>Spot Type</p>
          <select value={inputs.spotType} onChange={e=> setInputs({...inputs, spotType: e.target.value})}
           className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
            <option value="">Select</option>
            <option value="Bike">Bike</option>
            <option value="Car">Car</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
          </select>
        </div>
        <div>
          <p className='mt-4 text-gray-800'>
            Price <span className='text-xs'>/day</span>
          </p>
          <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={inputs.pricePerDay} onChange={e=>setInputs({...inputs, pricePerDay: e.target.value})}/>
        </div>
      </div>
        
        <button className='bg-primary text-white px-8 py-2 rounded mt-8 hover:bg-blue-500 cursor-pointer'>
          Add Spot
        </button>
    </form>
  )
}

export default AddSpot
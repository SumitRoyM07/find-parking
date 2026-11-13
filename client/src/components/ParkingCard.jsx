import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const ParkingCard = ({spot,index}) => {
  return (
    <Link to={'/spots/'+spot._id} onClick={()=> scrollTo(0,0)} key={spot._id} className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>
        <img src={spot.images[0]} alt=""  />
        <div className='p-4 pt-5'>
            <div className='flex items-center justify-between'>
                <p className='font-playfair text-xl font-medium text-gray-800'>{spot.parking.name}</p>
            </div>
            <div className='flex items-center gap-1 text-sm'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{spot.parking.address}</span>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p><span className='text-xl text-gray-800'>₹{spot.pricePerDay}</span>/day</p>
                <button className='px-4 py-4 text-sm font-medium border border-gray-300 rounded hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>Book now</button>
            </div>
        </div>
    </Link>
  )
}

export default ParkingCard
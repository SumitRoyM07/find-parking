import React, { useState } from 'react'
import { assets, spotsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CheckBox = ({ label, selected=false, onChange=()=>{}})=>{
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const RadioButton=({label,selected=false,onChange=()=>{}})=>{
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="radio" name='sortOption' checked={selected} onChange={() => onChange(label)} />
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const AllSpots = () => {
    const navigate = useNavigate();
    const [openFilter, setOpenFilter] = useState(false)
    const spotTypes = ["Bike","Car","SUV","Truck"];

    const sortOptions = ["Recently Added","Price Low to High","Price High to Low"];

    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* Left side */}
            <div>
                <div className='flex flex-col items-start text-left'>
                    <h1 className='font-playfair text-4xl md:text-[40px]'>Parking Spots</h1>
                </div>
                {spotsDummyData.map((spot) => (
                    <div key={spot._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                        <img onClick={() => { navigate(`/spots/${spot._id}`); scrollTo(0, 0) }} src={spot.images[0]} alt="hotel-img" title='View Parking Spots Details' className='max-h-50 max-w-80 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
                        <div className='md:w-1/2 flex flex-col gap-2'>
                            <p className='text-gray-500'>{spot.parking.city}</p>
                            <p onClick={() => {navigate(`/spots/${spot._id}`); scrollTo(0, 0)}}
                                className='text-gray-800 text-3xl font-playfair cursor-pointer'>{spot.parking.name}</p>
                            <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                                <img src={assets.locationIcon} alt="location-icon" />
                                <span>{spot.parking.address}</span>
                            </div>
                            {/* Parking Price per Night */}
                            <div>
                                <p className='text-xl font-medium text-gray-700'>₹{spot.pricePerHour}/hour</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Right side Filters */}
            <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>

                <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilter && 'border-b'}`}>
                    <p className=' text-base font-medium text-gray-800'>FILTERS</p>
                    <div className='text-xs cursor-pointer'>
                        <span onClick={() => setOpenFilter(!openFilter)} className='lg:hidden'>
                            {openFilter ? 'HIDE' : 'SHOW'}
                        </span>
                        <span className='hidden lg:block'>CLEAR</span>
                    </div>
                </div>
                <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2'>Popular filters</p>
                        {spotTypes.map((spot, index)=>(
                            <CheckBox key={index} label={spot}/>
                        ))}
                    </div>
                    <div className='p-5'>
                        <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                        {sortOptions.map((option, index)=>(
                            <RadioButton key={index} label={option} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSpots
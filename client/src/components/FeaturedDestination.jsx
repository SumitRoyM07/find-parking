import React from 'react'
import { spotsDummyData } from '../assets/assets'
import ParkingCard from './ParkingCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {

    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
            <Title title='Featured Parkings' subTitle='Discover our handpicked selection of exceptional parking spots around the city.'/>
            
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {spotsDummyData.slice(0, 4).map((spot,index) => (
                    <ParkingCard key={spot._id} spot={spot} index={index} />
                ))}
            </div>

            <button onClick={()=>{navigate('/spots'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
                View All Parking Spots
            </button>
        </div>
    )
}

export default FeaturedDestination
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, spotsDummyData } from '../assets/assets'

const hours = Array.from({ length: 24 }, (_, h) => {
    const period = h < 12 ? "AM" : "PM";
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return { value: h, label: `${hour12}:00 ${period}` };
});


const SpotDetails = () => {
  const { id } = useParams()
  const [spot, setSpot] = useState(null)
  const [mainImage, setMainImage] = useState(null)
  const [parkIn, setParkIn] = useState("");
  const [parkOut, setParkOut] = useState("");

  const handleParkInChange = (e) => {
        const value = e.target.value;
        setParkIn(value);
        // reset Park out if it is no longer after Park in
        if (parkOut !== "" && Number(parkOut) <= Number(value)) {
            setParkOut("");
        }
    };

  useEffect(() => {
    const spot = spotsDummyData.find(spot => spot._id === id)
    spot && setSpot(spot)
    spot && setMainImage(spot.images[0])
  }, [])
  return spot && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Spot Details */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{spot.parking.name} <span className='font-inter text-sm'>({spot.spotType})</span></h1>
      </div>
      {/* Parking Spot Address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{spot.parking.address}</span>
      </div>
      {/* Spot Image */}
      <div className='flex max-w-200 flex-col lg:flex-row mt-6 gap-6'>
        <img src={mainImage} alt="Spot Image" className='w-full rounded-xl shadow-lg object-cover' />
      </div>
      {/* Spot Highligts */}
      <div className='flex flex-col max-w-200 md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-2xl font-playfair'>
            Experience Seamless, Secure Parking Like Never Before
          </h1>
          <div>

          </div>
        </div>
        {/* Spot Price */}
        <p className='font-medium text-2xl'>₹{spot.pricePerDay}/day</p>
      </div>
      
      {/* ParkIn ParkOut Form */}
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-5xl'>
        
        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
          
          <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="" className='h-4' />
                  <label htmlFor="parkIn">Park in</label>
                </div>
                <input
                    id="parkIn"
                    type="date"
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-white"
                    required
                />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="" className='h-4' />
                  <label htmlFor="parkOut">Park out</label>
                </div>
                <input
                    id="parkOut"
                    type="date"
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-white"
                    required
                />
            </div>

          <div className='flex flex-col'>
            <label htmlFor="vehiclePlate" className='font-medium'>Vehicle-Plate</label>
              <input type="text" id="vehiclePlate" placeholder='WB85CD8296' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
          </div>
        </div>
        <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
          Check Availability
        </button>
      </form>

    </div>
  )
}


export default SpotDetails
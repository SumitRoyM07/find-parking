import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets.js'

const MyBookings = () => {
    const [bookings, setBookings] = useState(userBookingsDummyData)
    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title title='My Booking' subTitle='Easily manage your past, present, and future parking spot bookings in one place. Plan your travels seamlessly with just a few clicks' align='left' />

            <div>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Parkings</div>
                    <div className='w-1/3'>Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>

                {bookings.map((booking) => (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                        {/* Parking Details */}
                        <div className='flex flex-col md:flex-row'>
                            <img src={booking.spot.images[0]} alt="parking-img" className='min-md:w-44 rounded shadow object-cover' />
                            <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                                <p className='font-playfair text-2xl'>{booking.parking.name}
                                    <span className='font-inter text-sm'> ({booking.spot.spotType})</span>
                                </p>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.locationIcon} alt="location-img" />
                                    <span>{booking.parking.address}</span>
                                </div>

                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.calenderIcon} alt="" />
                                    <span>Vehicle Plate: {booking.vehiclePlate}</span>
                                </div>
                                <p>Total: ₹{booking.totalPrice}</p>
                            </div>
                        </div>
                        {/* Timings */}
                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                            <div>
                                <p>Park-In:</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(booking.parkInTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                                </p>
                            </div>
                            <div>
                                <p>Park-Out:</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(booking.parkOutTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                                </p>
                            </div>

                        </div>
                        {/* Payment Status */}
                        <div className='flex flex-col items-start justify-center pt-3'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                                <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                                    {booking.isPaid ? "Paid" : "Unpaid"}
                                </p>
                            </div>
                            {!booking.isPaid &&(
                                <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-amber-500 transition-all cursor-pointer'>
                                    Pay Now
                                </button>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MyBookings
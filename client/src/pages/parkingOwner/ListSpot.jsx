import React, { useState } from 'react'
import { spotsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const ListRoom = () => {
  const [spots, setSpots] = useState(spotsDummyData)
  return (
    <div>
      <Title align='left' font='outfit' title='Spot Listings' subTitle='View, edit, or manage all listed spots. Keep the information upto-date to provide the best experience for user.'/>
      <p className='text-gray-500 mt-8'>All Spots</p>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 mt-3 overflow-y-scroll'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
              <tr>
                <th className='py-3 px-4 text-gray-800 font-medium'>Spot Type</th>
                <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Total Spots</th>
                <th className='py-3 px-4 text-gray-800 font-medium'>Price/hour</th>
                <th className='py-3 px-4 text-center text-gray-800 font-medium'>Actions</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {
                spots.map((item,index)=>(
                  <tr key={index}>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                      {item.spotType}
                    </td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                      {item.totalSpot}
                    </td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                      {item.pricePerHour}
                    </td>
                    <td className='py-3 px-4 text-center border-t border-gray-300 text-sm text-red-500'>
                      <label className='inline-flex relative items-center cursor-pointer text-gray-900 gap-3'>
                        <input type="checkbox" className='sr-only peer' checked={item.isAvailable} />
                        <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'></div>
                        <span className='dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                      </label>
                    </td>
                  </tr>
                ))
              }
               
            </tbody>
        </table>

      </div>
    </div>
  )
}

export default ListRoom
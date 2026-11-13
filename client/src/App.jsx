import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllSpots from './pages/AllSpots';
import SpotDetails from './pages/SpotDetails';
import MyBookings from './pages/MyBookings';
import ParkingReg from './components/ParkingReg';
import Layout from './pages/parkingOwner/Layout';
import Dashboard from './pages/parkingOwner/Dashboard';
import AddSpot from './pages/parkingOwner/AddSpot';
import ListSpot from './pages/parkingOwner/ListSpot';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <ParkingReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/spots' element={<AllSpots />} />
          <Route path='/spots/:id' element={<SpotDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='add-spot' element={<AddSpot />} />
          <Route path='list-spot' element={<ListSpot />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
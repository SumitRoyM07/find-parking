import { assets, cities } from '../assets/assets'
import React, { useState } from 'react'

const spotTypes = ["Bike", "Car", "SUV", "Van", "Truck"];

// 24 hourly slots: value "00"-"23", label "12:00 AM" ... "11:00 PM"
const hours = Array.from({ length: 24 }, (_, h) => {
    const period = h < 12 ? "AM" : "PM";
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return { value: h, label: `${hour12}:00 ${period}` };
});

const Hero = () => {
    const [spotType, setSpotType] = useState("");
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

    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white text-shadow-black bg-[url("/src/assets/heroImage.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
            <p className='bg-amber-500/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Parking Experience</p>
            <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-14 font-bold md:font-extrabold max-w-xl mt-4 text-white [-webkit-text-stroke:2.5px_#1F2A44] [paint-order:stroke_fill]'>Find Perfect Parking Near Your Destination</h1>
            <p className='max-w-130 mt-2 text-sm md:text-base text-white [-webkit-text-stroke:1.5px_#1F2A44] [paint-order:stroke_fill]'>Find and book a parking spot in seconds. No circling, no stress. Start parking smarter today.</p>
            <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.locationIcon} alt="" className='h-4' />
                    <label htmlFor="destinationInput">City/Area</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destinations'>
                    {cities.map((city,index)=>(
                        <option value={city} key={index} />
                    ))}
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="parkIn">Park in</label>
                </div>
                <select
                    id="parkIn"
                    value={parkIn}
                    onChange={handleParkInChange}
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-white"
                    required>
                    <option value="" disabled>Select</option>
                    {hours.slice(0, 23).map((h) => (
                        <option value={h.value} key={h.value}>{h.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="parkOut">Park out</label>
                </div>
                <select
                    id="parkOut"
                    value={parkOut}
                    onChange={(e) => setParkOut(e.target.value)}
                    disabled={parkIn === ""}
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-white disabled:bg-gray-100"
                    required>
                    <option value="" disabled>Select</option>
                    {hours
                        .filter((h) => parkIn !== "" && h.value > Number(parkIn))
                        .map((h) => (
                            <option value={h.value} key={h.value}>{h.label}</option>
                        ))}
                </select>
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="spotType">Spot Type</label>
                <select
                    id="spotType"
                    value={spotType}
                    onChange={(e) => setSpotType(e.target.value)}
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-white"
                    required>
                    <option value="" disabled>Select</option>
                    {spotTypes.map((type) => (
                        <option value={type} key={type}>{type}</option>
                    ))}
                </select>
            </div>
            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <img src={assets.searchIcon} alt="searchIcon" className='h-7'/>
                <span>Search</span>
            </button>
        </form>
        </div>
    )
}

export default Hero
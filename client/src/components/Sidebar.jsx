import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'


const Sidebar = ({ sidebar, onClick }) => {

    return (
        // need to fix ease out duration
        <div className={sidebar ? 'z-40 fixed left-0 top-0 w-[25%] h-full p-5 bg-[#FD7422] ease-in-out duration-500 ' : "fixed left-[-100%]"}>
            <div className="flex justify-end">
                <AiOutlineArrowLeft color={"#2B3A67"} size={30} onClick={onClick} />
            </div>
            <div className='grid h-screen place-items-center'>
                <div className="">
                <label htmlFor="countries" className="block mb-2 font-semibold text-[#2B3A67] ">Location</label>
                <select id="countries" className="bg-[#FEADBF] border border-[#FEADBF] text-[#2B3A67] text-sm rounded-lg focus:ring-[#FADC64] focus:border-[#FADC64] block w-full p-2.5 ">
                    <option defaultValue>All</option>
                    <option value="tabernas">Tabernas</option>
                    <option value="almeria">Almeria</option>
                    <option value="mojacar">Mojacar</option>
                    <option value="granada">Granada</option>
                </select>
                </div>
                <div>
                    <h1 className="text-[#2B3A67] font-semibold">Media type:</h1>
                    <div className="flex justify-center">
                        <div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="videos" />
                                <label className="form-check-label inline-block text-white" htmlFor="videos">
                                    Videos
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="photos" />
                                <label className="form-check-label inline-block text-white" htmlFor="photos">
                                    Photos
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="drawings" />
                                <label className="form-check-label inline-block text-white" htmlFor="drawings">
                                    Drawings
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-[#2B3A67] font-semibold">Filter tags:</h1>
                    <div className="flex justify-center">
                        <div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="city" />
                                <label className="form-check-label inline-block text-white" htmlFor="city">
                                    City
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="beach" />
                                <label className="form-check-label inline-block text-white" htmlFor="beach">
                                    Beach
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="lake" />
                                <label className="form-check-label inline-block text-white" htmlFor="lake">
                                    Lake
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="nature" />
                                <label className="form-check-label inline-block text-white" htmlFor="nature">
                                    Nature
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="mountains" />
                                <label className="form-check-label inline-block text-white" htmlFor="mountains">
                                    Mountains
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="snow" />
                                <label className="form-check-label inline-block text-white" htmlFor="snow">
                                    Snow
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="lbeautyake" />
                                <label className="form-check-label inline-block text-white" htmlFor="beauty">
                                    Beauty
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="van" />
                                <label className="form-check-label inline-block text-white" htmlFor="van">
                                    Van
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="party" />
                                <label className="form-check-label inline-block text-white" htmlFor="party">
                                    Party
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#FADC64] rounded-sm bg-[#FADC64] checked:bg-[#2B3A67] checked:border-[#2B3A67] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="festivals" />
                                <label className="form-check-label inline-block text-white" htmlFor="festivals">
                                    Festivals
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
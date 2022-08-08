import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = ({ onClick }) => {

    return (
        <div className="flex justify-between items-center h-12 max-width[1240px] mx-auto px-4 bg-[#feadbf]">
            <div className="block" onClick={onClick}>
                <AiOutlineMenu size={20} />
            </div>
            <ul className="font-semibold text-[#FD7422] md:flex">
                <li className="p-4"><Link className="link" to="/map">Map</Link></li>
                <li className="p-4"><Link className="link" to="/gallery">Gallery</Link></li>
                <li className="p-4">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar
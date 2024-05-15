import React from 'react'
import './NavBar.css'
import logo_light from '../../assets/icons8-rocket-50-black.png'
import logo_dark from '../../assets/icons8-rocket-50-white.png'
import search_icon_light from '../../assets/icons8-telescope-48-black.png'
import search_icon_dark from '../../assets/icons8-telescope-48-white.png'
import toggle_icon_light from '../../assets/icons8-moon-and-stars-50-black.png'
import toggle_icon_dark from '../../assets/icons8-sun-50-white.png'


const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={logo_dark} alt="" className='logo' />
            <h1>Jenny's Space</h1>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Tech Stack</li>
                <li>CV</li>
            </ul>
            <div className='searchbox'>
                <input type="text" placeholder='Search' />
                <img src={search_icon_dark} alt="" />
            </div>
            <img src={toggle_icon_dark} alt="" className='darkModeToggle' />
        </div>
    )
}

export default NavBar
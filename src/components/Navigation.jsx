import React from 'react'
import './Navigation.css'
import PersonIcon from '../assets/icon/Person.svg'
import HeartIcon from '../assets/icon/Heart.svg'
import CardIcon from '../assets/icon/Kart.svg'
import SearchIcon from '../assets/icon/Search.svg'

function Navigation() {
    return (
        <nav className='Navigation'>
            <div className="Navigation_container">
                <div className="Navigation_logo">
                    <a href="/">Mobile Shop</a>
                </div>
                <div className="Navigation_links">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Shop</a>
                    <a href="/">Blog</a>
                </div>

                <div className="Navigation_options">
                    <div className="Navigation_options_item">
                        <img src={PersonIcon} alt="" />
                        Login/Register
                    </div>
                    <div className="Navigation_options_item">
                        <img src={SearchIcon} alt="" />
                    </div>
                    <div className="Navigation_options_item">
                        <img src={CardIcon} alt="" />
                        4
                    </div>
                    <div className="Navigation_options_item">
                        <img src={HeartIcon} alt="" />
                        8
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

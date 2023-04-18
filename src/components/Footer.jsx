import React from 'react'
import './Footer.css'
import FacebookIcon from '../assets/icon/facebook.svg'
import InstaIcon from '../assets/icon/insta.svg'
import TwiterIcon from '../assets/icon/twiter.svg'

function Footer() {
    return (
        <div>
   <div className='footer_container'>
            <div className="footer_row">
                <div className="footer_header">
                    <h3>Mobile Shop</h3>
                </div>
                <div className="footer_socialLinks">
                    <img src={FacebookIcon} />
                    <img src={InstaIcon} />
                    <img src={TwiterIcon} />
                </div>
            </div>
            <hr />
            <div className="footer_container_col">
                <div className="col1">
                    <a href="" className='bold'>Company Information</a>
                    <a href="">About us</a>
                    <a href="">Carrier</a>
                    <a href="">We are Hiring</a>
                    <a href="">Blog</a>
                </div>
                <div className="col2">
                    <a href="" className='bold'>Legal</a>
                    <a href="">About us</a>
                    <a href="">Carrier</a>
                    <a href="">We are Hiring</a>
                    <a href="">Blog</a>
                </div>
                <div className="col3">
                    <a href="" className='bold'>Features</a>
                    <a href="">Business Marketing</a>
                    <a href="">User Analytics</a>
                    <a href="">Live Chat</a>
                    <a href="">Unlimited Support</a>
                </div>
                <div className="col4">
                    <a href="" className='bold'>Resourses</a>
                    <a href="">IOS & Android</a>
                    <a href="">Customers</a>
                    <a href="">API</a>                   
                </div>
                <div className="col5">
                    <a href="" className='bold'>Get In Touch</a>
                    <div className='footerlinks'>
                        <input type="email" placeholder='Your Email' />
                        <button className='footer_btn'>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
        <div className="container_end">
            <h5>Made by Rupali</h5>
        </div>
        </div>   
    )
}

export default Footer

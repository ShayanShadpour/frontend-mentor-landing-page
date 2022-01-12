import React from 'react'
import logo from '../images/logo.svg'
import {GrFacebook} from 'react-icons/gr'
import {FaTwitter, FaPinterest, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div>
                <div className="logo">
                    <img src={logo} alt="loopstudios logo icon"></img>
                </div>

                <div className="flex-item-links">
                    <ul className="links">
                        <li><button>About</button></li>
                        <li><button>Careers</button></li>
                        <li><button>Events</button></li>
                        <li><button>Products</button></li>
                        <li><button>Support</button></li>
                    </ul>
                </div>
                </div>
                
            <div className="flex-right-side">
                <div className="flex-item-socials">
                    <ul className="socials">
                        <li><GrFacebook/></li>
                        <li><FaTwitter/></li>
                        <li><FaPinterest/></li>
                        <li><FaInstagram/></li>
                    </ul>
                </div>

                <div className="copyright">
                    &copy; 2021 Loopstudios. All rights reserved.
                </div>
            </div>
            </footer>
        </div>
    )
}

export default Footer

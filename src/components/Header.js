import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {

    const [isActive, setActive] = React.useState("false");
    const ToggleClass = () =>{
        setActive(!isActive);
    };

    

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="loopstudios logo icon"></img>
                </div>

                <nav className="desktop-nav">
                    <ul>
                        <li><button>About</button></li>
                        <li><button>Careers</button></li>
                        <li><button>Events</button></li>
                        <li><button>Products</button></li>
                        <li><button>Support</button></li>
                    </ul>
                </nav>
                

                <button onClick={ToggleClass} className={`hamburger ${isActive ? null : "is-active"}`}>
                    <div className="bar"></div>
                </button>

                <nav className={`mobile-nav ${isActive ? null : "is-active"}`}>
                <ul>
                        <li><button>About</button></li>
                        <li><button>Careers</button></li>
                        <li><button>Events</button></li>
                        <li><button>Products</button></li>
                        <li><button>Support</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header

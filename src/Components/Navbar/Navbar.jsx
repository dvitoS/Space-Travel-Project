import React, {useState} from 'react';
import './navbar.css'
import {GiGalaxy} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {VscThreeBars} from 'react-icons/vsc'


const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // activate navBar

    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    // remove navBar
    const removeNavbar = () =>{
        setActive('navBar')
    }


    return(
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><GiGalaxy className="icon" />Vast Space.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">Book now</a>
                        </button>
                        
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiOutlineClose className="icon"/>
                    </div>

                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <VscThreeBars className="icon" />
                </div>

            </header>
        </section>
    )
}

export default Navbar
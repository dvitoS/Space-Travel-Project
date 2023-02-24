import React,{useEffect} from "react";
import './footer.css'
import nightSky from '../../Assets/nightSky.mp4'
import {TbSend} from 'react-icons/tb'
import {FaWpexplorer} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {HiOutlineChevronRight} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    //--scroll animation--
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])



    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={nightSky} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address" />
                        <button className="btn" type="submit">
                            SEND <TbSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <FaWpexplorer className="icon" /> Explore the universe
                            </a>
                        </div>

                        <div className="footerParagraph">
                            Explore our solar systems' planets and moons
                        </div>

                    <div className="footerSocials">
                        <AiOutlineTwitter className="icon" />
                        <AiFillYoutube className="icon" />
                        <AiFillInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>
                    </div>
                    
                    <div className="footerLinks grid">
                        {/* first group */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Space Tourism
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                        {/* second group */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Booking
                            </li>
                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Sightseeing
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Rooms
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>
                        {/* third group */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                               LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Moon
                            </li>
                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Mars
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Earth
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Public Space Station
                            </li>

                            <li className="footerList flex">
                                <HiOutlineChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST SPACE TRAVEL WEBSITE</small>
                        <small>Prepare for launch!</small>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Footer
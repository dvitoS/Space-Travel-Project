import React, {useEffect} from "react"
import './home.css'
import video from '../../Assets/galaxy.mp4'
import {FaSearchLocation} from 'react-icons/fa'
import {HiFilter} from 'react-icons/hi'
import {SlSocialFacebook} from 'react-icons/sl'
import {SlSocialInstagram} from 'react-icons/sl'
import {SiTripadvisor} from 'react-icons/si'
import {BsListUl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    //--scroll animation--
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])


    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>


            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your destiantion
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here..." />
                            <FaSearchLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">99,999€</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="99,999" min="0" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>More Filters</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div data-aos="fade-up" className="rightIcons">
                        <SlSocialFacebook className="icon" />
                        <SlSocialInstagram className="icon" />
                        <SiTripadvisor className="icon" />
                    </div>

                    <div data-aos="fade-up" className="leftIcons">
                        <BsListUl className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>

        

    )
}

export default Home
import React, {useEffect} from "react";
import './main.css';

// React Icons
import {GoLocation} from 'react-icons/go';
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2';

// Assets (img,video)
import mars from '../../Assets/mars.mp4';
import mercury from '../../Assets/mercury.mp4';
import venus from '../../Assets/venus.mp4';
import moon from '../../Assets/moon.mp4';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        vidSrc: mars,
        destTitle: 'Mars',
        location: 'Solar system',
        grade: 'Safe',
        fees: '20.000€',
        description: " M​ars is the fourth planet from the Sun  a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past."

    },

    {
        id: 2,
        vidSrc: mercury,
        destTitle: 'Mercury',
        location: 'Solar system',
        grade: 'Dangerous',
        fees: '60.000€',
        description: " It's the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough to melt lead. The surface is a rusty color and it's peppered with intensely crunched mountains and thousands of large volcanoes.",

    },

    {
        id: 3,
        vidSrc: venus,
        destTitle: 'Venus',
        location: 'Solar system',
        grade: 'Dangerous',
        fees: '40.000€',
        description: "Named after the ancient Roman goddess of beauty, Venus is known for its exceptional brightness. Find out about the volcanoes that dot Venus's surface, the storms that rage in its atmosphere, and the surprising feature that makes Venus outshine every planet or star in the night sky.",

    },

    {
        id: 4,
        vidSrc: moon,
        destTitle: 'The Moon',
        location: 'Solar system',
        grade: 'Safe',
        fees: '15.000€',
        description: "The Moon is Earth's only natural satellite (a celestial body that orbits a planet). It takes the Moon 27.3 days to make a complete orbit around the Earth, but because the Earth is moving around the sun at the same time, it takes the moon 29.5 days to go through its eight different 'phases' – a lunar month.",

    },

    {
        id: 5,
        vidSrc: venus,
        destTitle: 'Venus',
        location: 'Solar system',
        grade: 'Dangerous',
        fees: '40.000€',
        description: " It's the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough to melt lead. The surface is a rusty color and it's peppered with intensely crunched mountains and thousands of large volcanoes."

    }, 

  



]

const Main = () => {
    //--scroll animation--
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])


    return(
        <section className="main container section">
                <div className="secTitle">
                    <h3 data-aos="fade-right" className="title">
                        Most visited destinations
                    </h3> 
                </div>

                <div className="secContent grid">
                    {
                        Data.map(( {id, vidSrc, destTitle, location, grade, fees, description} )=>{
                            return(
                                <div key={id} data-aos="fade-up" className="singleDestination">
                                    {
                                        /*return single id from map array*/
                                    }

                                    <div className="videoDiv">
                                        <video src={vidSrc} title={destTitle} muted autoPlay loop type="video/mp4"></video>
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                            <GoLocation className="icon" />
                                            <span className="name">{location}</span>
                                        </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{grade}<small>+1</small></span>
                                            </div>
                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <button className="btn flex">
                                            DETAILS <HiOutlineClipboardDocumentList className="icon" />
                                        </button>
                                        
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
        </section>
    )
}

export default Main
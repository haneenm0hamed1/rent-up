import React from "react"
import img from "../images/services.jpg"
import Back from "../About/Back"
import FeaturedCard from "../Home/Featured/FeaturedCard";
import Featured from './../Home/Featured/Featured';


const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
       <FeaturedCard/>
        </div>
      </section>
    </>
  )
}

export default Services
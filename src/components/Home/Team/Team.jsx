import React from "react"
import Heading from "../../Navbar/Heading"
import { team } from '../../MyData'
import { CiCircleCheck } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i ><CiCircleCheck/></i>
                  </div>
                  <i><FaLocationDot/></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button>
                      <i><SlEnvolope/></i>
                      Message
                    </button>
                    <button className='btn4'>
                      <i><FaPhoneAlt/></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
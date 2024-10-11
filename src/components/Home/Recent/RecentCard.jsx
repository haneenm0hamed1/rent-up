import React from 'react'
import { FaHeart } from "react-icons/fa";
import {list} from '../../MyData';
import { CiLocationOn } from "react-icons/ci";


const RecentCard = () => {
    return (
      <>
        <div className='content grid3 mtop'>
          {list.map((val, index) => {
            const { cover, category, location, name, price, type } = val
            return (
              <div className='box shadow' key={index}>
                <div className='img'>
                  <img src={cover} alt='' />
                </div>
                <div className='text'>
                  <div className='category flex'>
                    <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                    <i className='fa fa-heart'></i>
                  </div>
                  <h4>{name}</h4>
                  <p>
                    <i ><CiLocationOn/> {location}</i>
                  </p>
                </div>
                <div className='button flex'>
                  <div>
                    <button className='btn2'>{price}</button> 
                  </div>
                  <span>{type}</span>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }

export default RecentCard
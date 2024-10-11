import React from 'react'
import h1 from '../../images/hero/h1.png'
import h2 from '../../images/hero/h2.png'
import h3 from '../../images/hero/h3.png'
import h4 from '../../images/hero/h4.png'
import h6 from '../../images/hero/h6.png'

const FeaturedCard = () => {
  return (
    <div className='content grid5 mtop'>
        <div className="box">
            <img src={h1} alt="" />
            <h4>name: "Family House"</h4>
            <label>total: "122 Property"</label>
        </div>
        <div className="box">
            <img src={h2} alt="" />
            <h4> name: "House & Villa"</h4>
            <label> total: "155 Property"</label>

        </div> <div className="box">
            <img src={h6} alt="" />
            <h4>name: "Villa & Condo"</h4>
            <label>total: "80 Property"</label>

        </div> <div className="box">
            <img src={h3} alt="" />
            <h4>name: "Apartment"</h4>
            <label>total: "300 Property"</label>

        </div> <div className="box">
            <img src={h4} alt="" />
            <h4>name: "Office & Studio"</h4>
            <label>total: "80 Property"</label>
        </div>
    </div>
  )
}

export default FeaturedCard
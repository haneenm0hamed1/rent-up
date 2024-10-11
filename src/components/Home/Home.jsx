import React from 'react'
import Hero from './Hero/Hero';
import Featured from './Featured/Featured';
import Recent from './Recent/Recent';
import Awards from './Award/Award';
import Location from './Location/Location';
import Team from './Team/Team'
import Price from './Price/Price';
function Home() {
  return (
 <>
  <Hero/>
  <Featured/>
  <Recent/>
  <Awards/>
  <Location/>
  <Team/>
  <Price/>
 </>
  )
}

export default Home
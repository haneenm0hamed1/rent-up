import React from "react"
import Back from "../About/Back"
import img from "../images/about.jpg"
import RecentCard from './../Home/Recent/RecentCard';

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog